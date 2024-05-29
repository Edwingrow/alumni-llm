import OpenAI from "openai";
import { PaymentQuota, PaymentQuotaStatus } from "../model";


/**
 * Construye el prompt final con las claves y valores dados.
 *
 * Cada clave se denota como `{clave}` en el prompt y se reemplaza por el valor correspondiente.
 *
 * @param {string} prompt El prompt original con las claves provistas.
 * @param {Record<string, string>} keys Las claves y valores a reemplazar en el prompt.
 *
 * @returns {string} El prompt final con las claves reemplazadas por los valores.
 */
export function buildPrompt(prompt: string, keys: Record<string, string>): string {
  return prompt.replace(/{(.*?)}/g, (_, key) => keys[key]);
}

/**
 * Construye el valor de la clave `student_payments` para el prompt final.
 *
 * Si la cuota esta completada, no se agrega la fecha de vencimiento.
 *
 * @param {Array<PaymentQuota>} payments Las cuotas del alumno.
 *
 * @returns {string} El valor de la clave `student_payments` para el prompt final.
 */
export function buildStudentPayments(payments: Array<PaymentQuota>): string {
  return payments
    .map(
      (payment) =>
        `- Cuota ${payment.sequence}: (Monto: ${payment.amount}) (Estado: ${
          payment.status
        }) ${
          payment.status !== PaymentQuotaStatus.COMPLETE
            ? `(Vencimiento: ${payment.due_date})`
            : ""
        }`
    )
    .join("\n");
}

