// Copyright (c) 2023, faatlab and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student", {
    refresh: async function (frm) {
      $(".notes-section").remove();
      $(".open-activities").remove();
  
      let notes = frm.doc.notes || [];
      notes.sort(function (a, b) {
        return new Date(b.created_on) - new Date(a.created_on);
      });
  
      let notes_html = frappe.render_template("student_notes", {
        notes: notes,
      });
  
      $(notes_html).appendTo(frm.fields_dict["notes_html"].wrapper);
  
      $(".new-note-btn").click(() => {
        frm.trigger("add_note");
      });
  
      $(".notes-section")
        .find(".edit-note-btn")
        .on("click", function () {
          frm.edit_btn = this;
          frm.trigger("edit_note");
        });
  
      $(".notes-section")
        .find(".delete-note-btn")
        .on("click", function () {
          frm.delete_btn = this;
          frm.trigger("delete_note");
        });
  
      //<<<<< END OF NOTES SECTION >>>>>>
  
      // open activities
      frappe.call({
        method: "get_open_activities",
        doc: frm.doc,
        args: {
          ref_doctype: frm.doc.doctype,
          ref_docname: frm.doc.name,
        },
        callback: (r) => {
          if (!r.exc) {
            var activities_html = frappe.render_template("student_activities", {
              tasks: r.message.tasks,
              events: r.message.events,
            });
  
            $(activities_html).appendTo(
              frm.fields_dict["open_activities_html"].wrapper
            );
  
            $(".open-tasks")
              .find(".completion-checkbox")
              .on("click", function () {
                frm.status_box = this;
                const d = frappe.msgprint({
                  title: __('Notification'),
                  message: __('Are you sure you want to proceed?'),
                  primary_action:{
                      action(values) {          
                        frm.trigger("update_todo_status");
                        d.hide();
                      }
                  }
                });
              });
  
            $(".open-events")
              .find(".completion-checkbox")
              .on("click", function () {
                frm.status_box = this;
                const d = frappe.msgprint({
                  title: __('Notification'),
                  message: __('Are you sure you want to proceed?'),
                  primary_action:{
                      action(values) {          
                        frm.trigger("update_event_status");
                        d.hide();
                      }
                  }
                });
              });
            ``;
            frm.trigger("create_task");
            frm.trigger("create_event");
          }
        },
      });
  
      //<<<<<<<<<<<< END of Activities >>>>>>>>>>>>>>>>
  
      // <<<<<<<<<<<<< Qualification >>>>>>>>>>>>>
  
      let qualifications = frm.doc.qualifications || [];
      const linked_qual_types = await frappe.db.get_list("Qualification Type", {
        filters: { name: ["in", qualifications.map((q) => q.qualification)] },
        fields: ["qualification", "name"],
      });
  
      let student_qualification_html = frappe.render_template("student_qualification", {
        qualifications: qualifications.map((q) => ({
          ...q,
          qualification: linked_qual_types.find(
            (qt) => qt.name == q.qualification
          ),
        })),
      });
      $(".qualification-section").remove();
  
      $(student_qualification_html).appendTo(
        frm.fields_dict["custom_qualification_html"].wrapper
      );
  
      frm.add_custom_button(__("Add Qualification"), function () {
        console.log("hello");
        frm.trigger("add_qualification");
      });
  
      $(".qualification-section")
        .find(".edit-qualification-btn")
        .on("click", function () {
          frm.edit_btn = this;
          frm.trigger("edit_qualification");
        });
  
      $(".qualification-section")
        .find(".delete-qualification-btn")
        .on("click", function () {
          frm.delete_btn = this;
          frm.trigger("delete_qualification");
        });
    },
    
    add_qualification: function (frm) {
      var d = new frappe.ui.Dialog({
        title: __("Add a Qualification"),
        fields: [
          {
            label: "Qualification",
            fieldname: "qualification",
            fieldtype: "Link",
            options: "Qualification Type",
            reqd: 1,
          },
          {
            label: "Specifics",
            fieldname: "specifics",
            fieldtype: "Data",
          },
          {
            label: "CGPA",
            fieldname: "cgpa",
            fieldtype: "Float",
          },
          {
            label: "Percentage (%)",
            fieldname: "percentage",
            fieldtype: "Float",
          },
          {
            label: "Completion Year",
            fieldname: "completion_year",
            fieldtype: "Autocomplete",
            options: Array.from(
              { length: new Date().getFullYear() - 1950 + 1 },
              (_, i) => 1950 + i
            ).join("\n"),
          },
        ],
        primary_action: function () {
          var data = d.get_values();
          frappe.call({
            method: "add_qualification",
            doc: frm.doc,
            args: {
              qualification: data.qualification,
              cgpa: data.cgpa,
              percentage: data.percentage,
              completion_year: data.completion_year,
              specifics: data.specifics,
            },
            freeze: true,
            callback: function (r) {
              if (!r.exc) {
                frm.refresh();
              }
              d.hide();
            },
          });
        },
        primary_action_label: __("Add"),
      });
      d.show();
    },
  
    edit_qualification: function (frm) {
      const edit_btn = frm.edit_btn;
      let row = $(edit_btn).closest(".comment-content");
      let row_id = row.attr("name");
      let qualification_level = $(row).find(".qualification").html()?.trim();
      let cgpa = $(row).find(".cgpa").html()?.trim();
      let percentage = $(row).find(".percentage").html()?.trim();
      let completion_year = $(row).find(".completion_year").html()?.trim();
      let specifics = $(row).find(".specifics").html()?.trim();
      
      var d = new frappe.ui.Dialog({
        title: __("Edit Qualification"),
        fields: [
          {
            label: "Qualification",
            fieldname: "qualification",
            fieldtype: "Data",
            options: "Qualification Type",
            reqd: 1,
            default: qualification_level,
            read_only: 1,
          },
          {
            label: "Specifics",
            fieldname: "specifics",
            fieldtype: "Data",
            default: specifics,
          },
          {
            label: "CGPA",
            fieldname: "cgpa",
            fieldtype: "Float",
            precision: "2",
            default: +cgpa,
          },
          {
            label: "Percentage (%)",
            fieldname: "percentage",
            fieldtype: "Float",
            precision: "2",
            default: +percentage,
          },
          {
            label: "Completion Year",
            fieldname: "completion_year",
            fieldtype: "Autocomplete",
            options: Array.from(
              { length: new Date().getFullYear() - 1950 + 1 },
              (_, i) => 1950 + i
            ).join("\n"),
            default: completion_year,
          },
        ],
        primary_action: function () {
          var data = d.get_values();
          frappe.call({
            method: "edit_qualifications",
            doc: frm.doc,
            args: {
              cgpa: data.cgpa,
              percentage: data.percentage,
              completion_year: data.completion_year,
              specifics: data.specifics,
              row_id: row_id,
            },
            freeze: true,
            callback: function (r) {
              if (!r.exc) {
                frm.refresh();
                d.hide();
              }
            },
          });
        },
        primary_action_label: __("Done"),
      });
      d.show();
      console.log(cur_dialog);
    },
  
    delete_qualification(frm) {
      console.log("delete");
      var delete_btn = frm.delete_btn;
      let row_id = $(delete_btn).closest(".comment-content").attr("name");
      frappe.call({
        method: "delete_qualifications",
        doc: frm.doc,
        args: {
          row_id: row_id,
        },
        freeze: true,
        callback: function (r) {
          if (!r.exc) {
            frm.refresh();
          }
        },
      });
    },
  
  
    // <<<<<<<<<<<<< Qualification End >>>>>>>>>>>>>
  
  
    // <<<<<<<<<<<<< Notes >>>>>>>>>>>>>
  
    add_note: function (frm) {
      var d = new frappe.ui.Dialog({
        title: __("Add a Note"),
        fields: [
          {
            label: "Note",
            fieldname: "title",
            fieldtype: "Text Editor",
            reqd: 1,
            enable_mentions: true,
          },
        ],
        primary_action: function () {
          var data = d.get_values();
          frappe.call({
            method: "add_note",
            doc: frm.doc,
            args: {
              title: data.title,
            },
            freeze: true,
            callback: function (r) {
              if (!r.exc) {
                frm.refresh_field("notes");
                frm.refresh();
              }
              d.hide();
            },
          });
        },
        primary_action_label: __("Add"),
      });
      d.show();
    },
  
    edit_note(frm) {
      const edit_btn = frm.edit_btn;
      let row = $(edit_btn).closest(".comment-content");
      let row_id = row.attr("name");
      let row_content = $(row).find(".content").html();
      if (row_content) {
        var d = new frappe.ui.Dialog({
          title: __("Edit Note"),
          fields: [
            {
              label: "Note",
              fieldname: "title",
              fieldtype: "Text Editor",
              default: row_content,
            },
          ],
          primary_action: function () {
            var data = d.get_values();
            frappe.call({
              method: "edit_note",
              doc: frm.doc,
              args: {
                note: data.title,
                row_id: row_id,
              },
              freeze: true,
              callback: function (r) {
                if (!r.exc) {
                  frm.refresh_field("notes");
                  frm.refresh();
                  d.hide();
                }
              },
            });
          },
          primary_action_label: __("Done"),
        });
        d.show();
      }
    },
  
    delete_note(frm) {
      var delete_btn = frm.delete_btn;
      let row_id = $(delete_btn).closest(".comment-content").attr("name");
      frappe.call({
        method: "delete_note",
        doc: frm.doc,
        args: {
          row_id: row_id,
        },
        freeze: true,
        callback: function (r) {
          if (!r.exc) {
            frm.refresh_field("notes");
            frm.refresh();
          }
        },
      });
    },
    // <<<<<<<<<<<<< Notes End >>>>>>>>>>>>>
  
    
  
  
  
    // <<<<<<<<<<<<< Task >>>>>>>>>>>>>
    create_task(frm) {
      let _create_task = () => {
        const args = {
          doc: frm.doc,
          frm: frm,
          title: __("New Task"),
        };
        let composer = new frappe.views.InteractionComposer(args);
        composer.dialog.get_field("interaction_type").set_value("ToDo");
        // hide column having interaction type field
        $(composer.dialog.get_field("interaction_type").wrapper)
          .closest(".form-column")
          .hide();
        // hide summary field
        $(composer.dialog.get_field("summary").wrapper)
          .closest(".form-section")
          .hide();
      };
      $(".new-task-btn").click(_create_task);
    },
  
    create_event(frm) {
      let _create_event = () => {
        const args = {
          doc: frm.doc,
          frm: frm,
          title: __("New Event"),
        };
        let composer = new frappe.views.InteractionComposer(args);
        composer.dialog.get_field("interaction_type").set_value("Event");
        $(composer.dialog.get_field("interaction_type").wrapper).hide();
      };
      $(".new-event-btn").click(_create_event);
    },
  
    update_todo_status: async function (frm) {
      var input_field = frm.status_box;
      let completed = $(input_field).prop("checked") ? 1 : 0;
      let docname = $(input_field).attr("name");
      if (completed) {
        await frappe.db.set_value("ToDo", docname, "status", "Closed");
        frm.refresh();
      }
    },
    update_event_status: async function (frm) {
      var input_field = frm.status_box;
      let completed = $(input_field).prop("checked") ? 1 : 0;
      let docname = $(input_field).attr("name");
      if (completed) {
        await frappe.db.set_value("Event", docname, "status", "Closed");
        frm.refresh();
      }
    },
  });
  