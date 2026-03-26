export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white" aria-label="Application footer">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4">
        <p className="text-sm text-slate-600">AI Automation Testing</p>
        <p className="text-sm text-slate-500">&copy; {currentYear}</p>
      </div>
    </footer>
  )
}
