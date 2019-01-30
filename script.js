(($) => {
    $(document).ready(() => {
        $.getJSON('employees.json',(data) => {
            let status = '<ul class="list">';
            $.each(data,(index, employee) => {
                if (employee.inoffice === true) {
                    status +='<li class="in">';
                } else {
                    status +='<li class="out">';
                }
                status += employee.name + '</li>';
            });
            status += '</ul>';
            $('#employeeList').html(status)
        });
    });
})(jQuery);

