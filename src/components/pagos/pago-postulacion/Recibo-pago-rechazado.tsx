import { XCircle } from 'lucide-react'

interface PaymentErrorProps {
  errorCode: string;
  errorMessage: string;
  date: string;
}

export function ReciboPagoRechazado({ errorCode, errorMessage, date }: PaymentErrorProps) {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-2xl font-bold text-red-600">Pago Rechazado</h2>
        <div className="flex justify-center">
          <div className="bg-red-100 rounded-full p-4">
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <p className="text-gray-600">Lo sentimos, no pudimos procesar tu pago.</p>
      </div>

      <div className="space-y-4 border-t border-b py-6 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Código de error</span>
          <span className="font-medium">{errorCode}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Mensaje</span>
          <span className="font-medium text-right">{errorMessage}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Fecha y hora</span>
          <span className="font-medium">{date}</span>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold mb-2">Sugerencias:</h3>
        <ul className="text-sm space-y-2 text-gray-600">
          <li>• Verifica que los datos de tu tarjeta sean correctos</li>
          <li>• Asegúrate de tener fondos suficientes</li>
          <li>• Intenta con otro método de pago</li>
          <li>• Contacta a tu banco si el problema persiste</li>
        </ul>
      </div>

      <div className="text-center text-sm text-gray-500">
        Si necesitas ayuda, contáctanos a soporte@ejemplo.com
      </div>
    </div>
  )
}
