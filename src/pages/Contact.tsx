import { useState, useCallback } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialFormState: FormState = {
  name: '',
  email: '',
  message: '',
}

function validateEmail(value: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(value.trim())
}

function validateForm(data: FormState): FormErrors {
  const errors: FormErrors = {}
  const nameTrimmed = data.name.trim()
  const emailTrimmed = data.email.trim()
  const messageTrimmed = data.message.trim()

  if (!nameTrimmed) {
    errors.name = 'Name is required.'
  }
  if (!emailTrimmed) {
    errors.email = 'Email is required.'
  } else if (!validateEmail(emailTrimmed)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!messageTrimmed) {
    errors.message = 'Message is required.'
  }

  return errors
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialFormState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = useCallback(
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }))
      }
    },
    [errors]
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const validationErrors = validateForm(formData)
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }
      setErrors({})
      setSubmitted(true)
    },
    [formData]
  )

  if (submitted) {
    return (
      <div className="rounded-lg bg-white p-6 shadow-sm" role="status" aria-live="polite">
        <h1 className="text-2xl font-semibold text-slate-800">Contact Us</h1>
        <div className="mt-4 rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
          <p className="font-medium">Thank you for your message.</p>
          <p className="mt-1 text-sm">
            Your message has been successfully sent. We will get back to you as soon as we can.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-800">Contact Us</h1>
      <p className="mt-2 text-slate-600">
        Have a question, found an issue, or want to share feedback? Send us a message.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-4"
        noValidate
        aria-label="Contact form"
      >
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={handleChange('name')}
            autoComplete="name"
            required
            aria-required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={`mt-1 block w-full rounded-md border px-3 py-2 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 ${
              errors.name ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            autoComplete="email"
            required
            aria-required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={`mt-1 block w-full rounded-md border px-3 py-2 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="contact-message"
            value={formData.message}
            onChange={handleChange('message')}
            rows={5}
            required
            aria-required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className={`mt-1 block w-full rounded-md border px-3 py-2 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 ${
              errors.message ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-fit rounded-md bg-slate-800 px-4 py-2 font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          aria-label="Submit contact form"
        >
          Send message
        </button>
      </form>
    </div>
  )
}
