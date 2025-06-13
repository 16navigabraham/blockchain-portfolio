"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rotate-45 animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-500/10 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-indigo-500/10 rotate-12 animate-float-slow"></div>
      <div className="absolute top-60 left-1/2 w-8 h-8 bg-pink-500/10 rounded-full animate-float-medium"></div>

      {/* Blockchain-themed floating icons */}
      <div className="absolute top-32 right-10 animate-float-slow">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-blue-500/40 rounded"></div>
        </div>
      </div>

      <div className="absolute bottom-60 left-40 animate-float-fast">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-green-500/40 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
