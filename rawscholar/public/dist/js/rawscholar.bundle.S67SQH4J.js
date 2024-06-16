(() => {
  // frappe-html:/home/ashwin/frappe-bench/apps/rawscholar/rawscholar/public/js/templates/student_notes.html
  frappe.templates["student_notes"] = `<div class="notes-section col-xs-12">
	<div class="new-btn pb-3">
		<button class="btn btn-sm small new-note-btn mr-1">
			<svg class="icon icon-sm">
				<use href="#icon-add"></use>
			</svg>
			{{ __("New Note") }}
		</button>
	</div>
	<div class="all-notes">
		{% if (notes.length) { %}
			{% for(var i=0, l=notes.length; i<l; i++) { %}
				<div class="comment-content p-3 row" name="{{ notes[i].name }}">
					<div class="mb-2 head col-xs-3">
						<div class="row">
							<div class="col-xs-2">
								{{ frappe.avatar(notes[i].added_by) }}
							</div>
							<div class="col-xs-10">
								<div class="mr-2 title font-weight-bold ellipsis" title="{{ strip_html(notes[i].added_by) }}">
									{{ strip_html(notes[i].added_by) }}
								</div>
								<div class="time small text-muted">
									{{ frappe.datetime.global_date_format(notes[i].created_on) }}
								</div>
							</div>
						</div>
					</div>
					<div class="content col-xs-8">
						{{ notes[i].title }}
					</div>
					<div class="col-xs-1 text-right">
						<span class="edit-note-btn btn btn-link">
							<svg class="icon icon-sm"><use xlink:href="#icon-edit"></use></svg>
						</span>
						<span class="delete-note-btn  btn btn-link pl-2">
							<svg class="icon icon-xs"><use xlink:href="#icon-delete"></use></svg>
						</span>
					</div>
				</div>
			{% } %}
		{% } else { %}
            <div class="no-activity text-muted pt-6">
                {{ __("No Notes") }}
            </div>
		    {% } %}
	</div>
</div>

<style>

.comment-content {
    border: 1px solid var(--border-color);
	border-bottom: none;
}

.comment-content:last-child {
    border-bottom: 1px solid var(--border-color);
}

.new-btn {
	text-align: right;
}

.notes-section .no-activity {
	min-height: 100px;
	text-align: center;
}

.notes-section .btn {
	padding: 0.2rem 0.2rem;
}

</style>`;

  // frappe-html:/home/ashwin/frappe-bench/apps/rawscholar/rawscholar/public/js/templates/student_activities.html
  frappe.templates["student_activities"] = `<div class="open-activities">
	<div class="new-btn pb-3">
		<span>
			<button class="btn btn-sm small new-task-btn mr-1">
				<svg class="icon icon-sm">
					<use href="#icon-small-message"></use>
				</svg>
				{{ __("New Task") }}
			</button>
			<button class="btn btn-sm small new-event-btn">
				<svg class="icon icon-sm">
					<use href="#icon-calendar"></use>
				</svg>
				{{ __("New Event") }}
			</button>
		</span>
	</div>
	<div class="section-body">
		<div class="open-tasks pr-1">
			<div class="open-section-head">
				<span class="ml-2">{{ __("Open Tasks") }}</span>
			</div>
			{% if (tasks.length) { %}
				{% for(var i=0, l=tasks.length; i<l; i++) { %}
					<div class="single-activity">
						<div class="flex justify-between mb-2">
							<div class="row label-area font-md ml-1">
								<span class="mr-2">
									<svg class="icon icon-sm">
										<use href="#icon-small-message"></use>
									</svg>
								</span>
								<a href="/app/todo/{{ tasks[i].name }}" title="{{ __('Open Task') }}">
									{%= tasks[i].description %}
								</a>
							</div>
							<div class="checkbox">
								<input type="checkbox" class="completion-checkbox"
									name="{{tasks[i].name}}" title="{{ __('Mark As Closed') }}">
							</div>
						</div>
						{% if(tasks[i].date) { %}
							<div class="text-muted ml-1">
								{%= frappe.datetime.global_date_format(tasks[i].date) %}
							</div>
						{% } %}
						{% if(tasks[i].allocated_to) { %}
							<div class="text-muted  ml-1">
								{{ __("Allocated To:") }}
								{%= tasks[i].allocated_to %}
							</div>
						{% } %}
						</div>
			    {% } %}
            {% } else { %}
                <div class="single-activity no-activity text-muted">
                    {{ __("No open task") }}
                </div>
		    {% } %}
		</div>
		<div class="open-events pl-1">
			<div class="open-section-head">
				<span class="ml-2">{{ __("Open Events") }}</span>
			</div>
			{% if (events.length) { %}
                {% let icon_set = {"Sent/Received Email": "mail", "Call": "call", "Meeting": "share-people"}; %}
                {% for(var i=0, l=events.length; i<l; i++) { %}
                    <div class="single-activity">
                        <div class="flex justify-between mb-2">
                            <div class="row label-area font-md ml-1 title">
                                <span class="mr-2">
                                    <svg class="icon icon-sm">
                                        <use href="#icon-{{ icon_set[events[i].event_category] || 'calendar' }}"></use>
                                    </svg>
                                </span>
                                <a href="/app/event/{{ events[i].name }}" title="{{ __('Open Event') }}">
                                    {%= events[i].subject %}
                                </a>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" class="completion-checkbox"
                                    name="{{ events[i].name }}" title="{{ __('Mark As Closed') }}">
                            </div>
                        </div>
                        <div class="text-muted ml-1">
                            {%= frappe.datetime.global_date_format(events[i].starts_on) %}

                            {% if (events[i].ends_on) { %}
                                {% if (frappe.datetime.obj_to_user(events[i].starts_on) != frappe.datetime.obj_to_user(events[i].ends_on)) %}
                                    -
                                    {%= frappe.datetime.global_date_format(frappe.datetime.obj_to_user(events[i].ends_on)) %}
                                    {%= frappe.datetime.get_time(events[i].ends_on) %}
                                {% } else if (events[i].ends_on) { %}
                                    -
                                    {%= frappe.datetime.get_time(events[i].ends_on) %}
                                {% } %}
                            {% } %}

                        </div>
                    </div>
                {% } %}
            {% } else { %}
            <div class="single-activity no-activity text-muted">
                {{ __("No open event") }}
            </div>
		    {% } %}
		</div>
	</div>
</div>


<style>
.open-activities {
	min-height: 50px;
	padding-left: 0px;
	padding-bottom: 15px !important;
}

.open-activities .new-btn {
	text-align: right;
}

.single-activity {
	min-height: 90px;
	border: 1px solid var(--border-color);
	padding: 10px;
	border-bottom: 0;
	padding-right: 0;
}

.single-activity:last-child {
	border-bottom: 1px solid var(--border-color);
}

.single-activity:hover .completion-checkbox{
	display: block;
}

.completion-checkbox {
	vertical-align: middle;
	display: none;
}

.checkbox {
	min-width: 22px;
}

.open-tasks {
	width: 50%;
}

.open-tasks:first-child {
	border-right: 0;
}

.open-events {
	width: 50%;
}

.open-section-head {
	background-color: var(--bg-color);
	min-height: 30px;
	border-bottom: 1px solid var(--border-color);
	padding: 10px;
	font-weight: bold;
}

.no-activity {
    text-align: center;
    padding-top: 30px;
}

.form-footer {
	background-color: var(--bg-color);
}
</style>`;

  // frappe-html:/home/ashwin/frappe-bench/apps/rawscholar/rawscholar/public/js/templates/student_qualification.html
  frappe.templates["student_qualification"] = `<div class="qualification-section col-xs-12">
	<div class="all-qualification">
        {% if (qualifications.length) { %}
            <h5>Qualifications</h5>
            {% for(var i=0, l=qualifications.length; i<l; i++) { %}
                <div class="comment-content p-3 row" name="{{ qualifications[i].name }}">
                    <div class="left-content">
                        <div class="content qualification_and_year">
                            <div class="content qualification font-weight-bold" style="display: inline;">
                                {{ qualifications[i].qualification.qualification }}
                            </div>
                            {% if (qualifications[i].completion_year && qualifications[i].completion_year != 0) { %}
                            (<div class="content completion_year" style="display: inline;">
                                {{ qualifications[i].completion_year }}
                            </div>)
                            {% } %}
                        </div>
                        
                        {% if (qualifications[i].specifics && qualifications[i].specifics != "") { %}
                        <div class="content specifics">
                            {{ qualifications[i].specifics }}
                        </div>
                            {% } %}
                       
                    </div>
                    <div class="right-content">
                        {% if (qualifications[i].cgpa && qualifications[i].cgpa != 0) { %}
                        <div class="content cgpa" style="display: inline;">
                            {{ qualifications[i].cgpa }} 
                        </div>
                        <div style="display: inline;">CGPA</div>
                        {% } %}
                       
                        <div>
                            {% if (qualifications[i].percentage && qualifications[i].percentage != 0) { %}
                            <div class="content percentage" style="display: inline;">
                                {{ qualifications[i].percentage }}
                            </div>
                            <div style="display: inline;">%</div>
                        {% } %}
                       
                        </div>
                    </div>
                    <div class="col-xs-1 text-right">
						<span class="edit-qualification-btn btn btn-link">
							<svg class="icon icon-sm"><use xlink:href="#icon-edit"></use></svg>
						</span>
						<span class="delete-qualification-btn  btn btn-link pl-2">
							<svg class="icon icon-xs"><use xlink:href="#icon-delete"></use></svg>
						</span>
					</div>
                </div>
            {% } %}
        {% } %}
    </div>
    
</div>

<style>

.comment-content {
    border: 1px solid var(--border-color);
	border-bottom: none;
}

.comment-content:last-child {
    border-bottom: 1px solid var(--border-color);
}

.new-btn {
	text-align: right;
}

.notes-section .no-activity {
	min-height: 100px;
	text-align: center;
}

.notes-section .btn {
	padding: 0.2rem 0.2rem;
}

.comment-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
}

.left-content {
    flex-grow: 1;
}



.edit-delete-buttons {
    margin-top: 10px;
}

.edit-delete-buttons .btn {
    margin-right: 5px;
}

</style>`;
})();
//# sourceMappingURL=rawscholar.bundle.S67SQH4J.js.map
