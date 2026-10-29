"use client";
import { useActionState } from "react";
import { sendMessage, type ContactState } from "./action";

const initialState: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendMessage,
    initialState,
  );

  return (
    <>
      <div role="status" aria-live="polite" className="max-w-xl">
        {!isPending && state.status === "success" && (
          <p className="border-l-4 border-[#00703c] pl-4 py-2 font-bold">
            Thank you, your message has been sent. I’ll reply within two working
            days.
          </p>
        )}
        {!isPending && state.status === "error" && !state.errors && (
          <p className="border-l-4 border-[#b3261e] pl-4 py-2 font-bold">
            Sorry, your message couldn’t be sent. Please try again, or email me
            at info@ifeanyiukiwe.com.
          </p>
        )}
      </div>
      <form
        action={formAction}
        noValidate
        className="max-w-xl flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold">
            Your name
          </label>
          {state.errors?.name && (
            <p id="name-error" className="font-bold text-[#b3261e]">
              <span className="sr-only">Error:</span> {state.errors.name}
            </p>
          )}
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            defaultValue={state.values?.name}
            aria-invalid={state.errors?.name ? true : undefined}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            className={`border-2 ${state.errors?.name ? "border-[#b3261e]" : "border-ink"} rounded px-3 py-2`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold">
            Your email
          </label>
          {state.errors?.email && (
            <p id="email-error" className="font-bold text-[#b3261e]">
              <span className="sr-only">Error:</span> {state.errors.email}
            </p>
          )}
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            defaultValue={state.values?.email}
            aria-invalid={state.errors?.email ? true : undefined}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            className={`border-2 ${state.errors?.email ? "border-[#b3261e]" : "border-ink"} rounded px-3 py-2`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-bold">
            Your message
          </label>
          {state.errors?.message && (
            <p id="message-error" className="font-bold text-[#b3261e]">
              <span className="sr-only">Error:</span> {state.errors.message}
            </p>
          )}
          <textarea
            name="message"
            id="message"
            rows={6}
            required
            defaultValue={state.values?.message}
            aria-invalid={state.errors?.message ? true : undefined}
            aria-describedby={
              state.errors?.message ? "message-error" : undefined
            }
            className={`border-2 ${state.errors?.message ? "border-[#b3261e]" : "border-ink"} rounded px-3 py-2`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex self-start items-center cursor-pointer min-h-12 px-6 rounded bg-petrol text-white font-bold no-underline shadow-[0_3px_0_var(--color-petrol-shadow)] hover:bg-petrol-dark"
        >
          {isPending ? "Sending…" : "Send message"}
        </button>
      </form>
    </>
  );
}
