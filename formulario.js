const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <div>${message}</div>
        </div>
    `;
    alertPlaceholder.append(wrapper);
};

const form = document.getElementById('formVoluntario');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    appendAlert('¡Tu solicitud fue enviada correctamente!', 'success');

    form.reset();
});
