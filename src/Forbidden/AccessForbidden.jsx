import React from 'react'
import { useNavigate } from 'react-router';

const AccessForbidden = () => {
    const title = 'Access Forbidden';
    const message = "You don't have permission to access this resource. Please verify your credentials or contact an administrator."
    const navigate = useNavigate()

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 py-12 text-slate-100 selection:bg-rose-500/30 selection:text-rose-200 mx-10 my-5 rounded-3xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 animate-pulse rounded-full bg-rose-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 animate-pulse rounded-full bg-amber-500/10 blur-3xl [animation-delay:1.5s]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size:4rem_4rem opacity-20 mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
        <div className="group relative mb-8 flex items-center justify-center">
          <span className="absolute inline-flex h-24 w-24 animate-ping rounded-full bg-rose-500/20 duration-1000" />
          <span className="absolute inline-flex h-28 w-28 animate-spin rounded-full border border-dashed border-rose-500/40 [animation-duration:12s]" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-rose-500/30 bg-slate-900/90 shadow-2xl shadow-rose-950/50 backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
            <svg
              className="h-10 w-10 animate-bounce text-rose-500 [animation-duration:2.5s]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
        </div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-rose-400">
          <span className="h-2 w-2 animate-ping rounded-full bg-rose-500" />
          Restricted Area
        </div>

        <h1 className="bg-linear-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-8xl font-black tracking-tighter text-transparent sm:text-9xl">
          403
        </h1>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          {message}
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={()=>navigate(-1)}
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Go Back
          </button>

          <button
            type="button"
            onClick={()=>navigate('/')}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-rose-500/40 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Return Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccessForbidden