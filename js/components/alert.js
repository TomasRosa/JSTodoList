
export default class Alert{
    constructor (alertId)
    {
        this.alert = document.getElementById(alertId);
    }
    show(message)
    {
        this.alert.classList.remove('d-none'); ///Si los campos estan vacios oculto el display none, es decir hago que se muestre el mensaje de alerta.
        this.alert.innerText = message;
    }
    hide()
    {
        this.alert.classList.add('d-none');
    }
}