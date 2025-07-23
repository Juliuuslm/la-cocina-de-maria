export const formValidation = {
  name: {
    required: "El nombre es requerido",
    minLength: {
      value: 2,
      message: "El nombre debe tener al menos 2 caracteres"
    },
    maxLength: {
      value: 50,
      message: "El nombre no puede exceder 50 caracteres"
    },
    pattern: {
      value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
      message: "El nombre solo puede contener letras y espacios"
    }
  },
  email: {
    required: "El email es requerido",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Ingrese un email válido"
    }
  },
  phone: {
    pattern: {
      value: /^(\+52|52)?[\s\-]?[0-9]{10}$/,
      message: "Ingrese un teléfono válido (10 dígitos)"
    }
  },
  subject: {
    required: "Por favor seleccione un tipo de consulta"
  },
  date: {
    validate: (value: string, formValues: any) => {
      if (formValues.subject === 'reservations' && !value) {
        return "La fecha es requerida para reservaciones";
      }
      if (value) {
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          return "La fecha no puede ser anterior a hoy";
        }
      }
      return true;
    }
  },
  guests: {
    validate: (value: number, formValues: any) => {
      if (formValues.subject === 'reservations') {
        if (!value || value < 1) {
          return "El número de personas es requerido para reservaciones";
        }
        if (value > 20) {
          return "Para grupos de más de 20 personas, contacte directamente";
        }
      }
      return true;
    }
  },
  message: {
    required: "Por favor ingrese su mensaje",
    minLength: {
      value: 10,
      message: "El mensaje debe tener al menos 10 caracteres"
    },
    maxLength: {
      value: 500,
      message: "El mensaje no puede exceder 500 caracteres"
    }
  }
};

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  date?: string;
  guests?: number;
  message: string;
}

export const formatWhatsAppMessage = (data: ContactFormData): string => {
  const subjectLabels: Record<string, string> = {
    'general': 'Información General',
    'reservations': 'Reservación',
    'events': 'Eventos y Banquetes',
    'catering': 'Servicio de Catering'
  };

  let message = `🏮 *Nuevo mensaje desde la web*\n\n`;
  message += `👤 *Nombre:* ${data.name}\n`;
  message += `📧 *Email:* ${data.email}\n`;
  
  if (data.phone) {
    message += `📱 *Teléfono:* ${data.phone}\n`;
  }
  
  message += `📋 *Tipo de consulta:* ${subjectLabels[data.subject] || data.subject}\n`;
  
  if (data.subject === 'reservations') {
    if (data.date) {
      const formattedDate = new Date(data.date).toLocaleDateString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      message += `📅 *Fecha solicitada:* ${formattedDate}\n`;
    }
    if (data.guests) {
      message += `👥 *Número de personas:* ${data.guests}\n`;
    }
  }
  
  message += `\n💬 *Mensaje:*\n${data.message}\n\n`;
  message += `_Enviado desde lacocinadmaria.com_`;
  
  return message;
};