import { send, sendForm } from 'emailjs-com';
export default ({ env }, inject) => {

  const SERVER_ID = env.EMAIL_SERVER_ID
  const TEMPLATE_ID = env.EMAIL_TEMPLATE_ID
  const USER_ID = env.EMAIL_USER_ID

  const email = {
    async send(params) {
      return send(SERVER_ID, TEMPLATE_ID, params, USER_ID)
    },
    async sendForm(form) {
      return sendForm(SERVER_ID, TEMPLATE_ID, form, USER_ID)
    }
  }

  inject('email', email)
}
