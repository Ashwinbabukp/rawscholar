# Copyright (c) 2023, faatlab and contributors
# For license information, please see license.txt

import frappe
from frappe.desk.notifications import notify_mentions
from frappe.model.document import Document
from frappe.utils import cstr, now, today
from frappe.model.document import Document


class Student(Document):

    def validate(self):
        self.validate_payments()

    def validate_payments(self):
        # Validate the payments as needed
        pass

    def on_update(self):
        # Additional logic on update, if necessary
        pass

    @frappe.whitelist()
    def add_note(self, title):
        self.append(
            "notes", {"title": title, "added_by": frappe.session.user, "created_on": now()})
        self.save()
        notify_mentions(self.doctype, self.name, title)

    @frappe.whitelist()
    def edit_note(self, note, row_id):
        for d in self.notes:
            if cstr(d.name) == row_id:
                d.title = note
                d.db_update()

    @frappe.whitelist()
    def delete_note(self, row_id):
        for d in self.notes:
            if cstr(d.name) == row_id:
                self.remove(d)
                break
        self.save()

    # qualifications
    @frappe.whitelist()
    def add_qualification(self, qualification, cgpa, percentage, completion_year=None, specifics=None):
        self.append(
            "qualifications", {"qualification": qualification, "cgpa": cgpa, "percentage": percentage, "completion_year": completion_year, "specifics": specifics})
        self.save()

    @frappe.whitelist()
    def edit_qualifications(self, cgpa, percentage, completion_year, specifics, row_id):
        for d in self.qualifications:
            if cstr(d.name) == row_id:
                d.cgpa = cgpa
                d.percentage = percentage
                d.completion_year = completion_year
                d.specifics = specifics
                d.db_update()

    @frappe.whitelist()
    def delete_qualifications(self, row_id):
        for d in self.qualifications:
            if cstr(d.name) == row_id:
                self.remove(d)
                break
        self.save()

    @frappe.whitelist()
    def get_open_activities(self, ref_doctype, ref_docname):

        def get_open_todos(ref_doctype, ref_docname):
            return frappe.get_all(
                "ToDo",
                filters={"reference_type": ref_doctype,
                         "reference_name": ref_docname, "status": "Open"},
                fields=[
                    "name",
                    "description",
                    "allocated_to",
                    "date",
                ],
            )

        def get_open_events(ref_doctype, ref_docname):
            event = frappe.qb.DocType("Event")
            event_link = frappe.qb.DocType("Event Participants")

            query = (
                frappe.qb.from_(event)
                .join(event_link)
                .on(event_link.parent == event.name)
                .select(
                    event.name,
                    event.subject,
                    event.event_category,
                    event.starts_on,
                    event.ends_on,
                    event.description,
                )
                .where(
                    (event_link.reference_doctype == ref_doctype)
                    & (event_link.reference_docname == ref_docname)
                    & (event.status == "Open")
                )
            )
            data = query.run(as_dict=True)

            return data

        tasks = get_open_todos(ref_doctype, ref_docname)
        events = get_open_events(ref_doctype, ref_docname)

        return {"tasks": tasks, "events": events}

    @staticmethod
    def get_query(doctype, txt, searchfield, start, page_len, filters):
        # Customize the query to filter payments based on the selected student
        return f"""
          SELECT name1, amount
          FROM `Payment`
          WHERE Student = '{filters.get('Student')}'
        """
