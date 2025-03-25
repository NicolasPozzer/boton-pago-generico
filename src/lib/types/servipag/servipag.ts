// Interfaces para los diferentes XMLs
export interface XML1Data {
  codigo_canal_pago: number;
  id_tx_pago: string;
  fecha_pago: string;
  monto_total_deuda: string;  // Cambiado a string
  numero_boletas: number;
  id_sub_tx: number;
  identificador: number;
  boleta: number;
  monto: string;  // Cambiado a string
  fecha_vencimiento: string;
  nombre_cliente?: string;
  rut_cliente?: number;
  email_cliente?: string;
}

export interface XML2Data {
  firma_servipag: string;      // Base64
  id_trx_servipag: string;     // E + Canal + Periodo + Pago + Secuencia
  id_tx_cliente: string;       // max 30 chars
  fecha_pago: string;          // AAAAMMDD
  cod_medio_pago: string;      // max 40 chars
  fecha_contable: string;      // AAAAMMDD
  codigo_identificador: string; // max 20 chars
  boleta: string;              // max 20 chars
  monto: string;               // max 8 chars, sin decimales
}

export interface XML3Data {
  codigo_retorno: '0' | '1';   // 0: OK, 1: Error
  mensaje_retorno: string;     // max 40 chars
}

export interface XML4Data {
  firma_servipag: string;      // Base64
  id_trx_servipag: string;     // Igual que XML2
  id_tx_cliente: string;       // max 40 chars
  estado_pago: string;         // 0: Pagado, !0: No pagado
  mensaje: string;             // max 40 chars
}

// Interfaz para el estado del pago
export interface PaymentStatus {
  status: 'pending' | 'processing' | 'completed' | 'error';
  message: string;
  transaction_id: string;
  estado_pago?: string;
  mensaje?: string;
  id_trx_servipag?: string;
  retry_count?: number;
}

// Interfaz para la respuesta del servidor
export interface ServerResponse {
  xml: string;
  xml2: string;  // Agregamos xml2
  servipag_url: string;
}

// Constantes
export const SERVIPAG_CONFIG = {
  RETRY_DELAY: 30000,          // 30 segundos entre reintentos
  MAX_RETRIES: 10,             // Número máximo de reintentos
  EMAIL_RETRY_THRESHOLD: 5,     // Número de reintentos para enviar email
  MAX_EMAIL_RECIPIENTS: 3,      // Máximo número de destinatarios de email
  POLLING_INTERVAL: 5000,       // 5 segundos entre consultas de estado
  MAX_POLLING_RETRIES: 60      // 5 minutos máximo de polling
} as const;
