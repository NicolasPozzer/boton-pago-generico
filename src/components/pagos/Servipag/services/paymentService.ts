import { PaymentData, PaymentResponse, ReceptionResponse, TransactionStatus } from '../types/payment';

const API_URL = process.env.NEXT_PUBLIC_API_URL_BACK_SERVIPAG || 'http://localhost:8001';

export const paymentService = {
  async processPayment(data: PaymentData): Promise<PaymentResponse> {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(`${API_URL}/imprime`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error procesando el pago');
      }

      const result = await response.json();

      // Validar que tenemos los campos necesarios
      if (!result.xml || !result.servipag_url) {
        throw new Error('Respuesta inválida del servidor');
      }

      return result;
    } catch (error) {
      console.error('Error en processPayment:', error);
      throw error;
    }
  },

  async receivePayment(xml: string): Promise<ReceptionResponse> {
    const formData = new FormData();
    formData.append('xml', xml);

    const response = await fetch(`${API_URL}/recepciona`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error recibiendo la confirmación');
    }

    return response.json();
  },

  async checkTransactionStatus(id_tx_cliente: string): Promise<TransactionStatus> {
    const formData = new FormData();
    formData.append('id_tx_cliente', id_tx_cliente);

    const response = await fetch(`${API_URL}/estado`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error consultando el estado de la transacción');
    }

    return response.json();
  }
};
