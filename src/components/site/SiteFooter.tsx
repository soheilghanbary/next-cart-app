export const SiteFooter = () => {
  return (
    <footer className="bottom-0 left-0 w-full border-t p-4">
      <p className="text-center text-sm text-muted-foreground [&>a]:text-foreground [&>a]:underline">
        ساخته شده توسط{" "}
        <a target="_blank" href="https://x.com/soheil_prog">
          سهیل قنبری
        </a>
        . میزبانی شده در Vercel. کد به صورت متن باز در
        <a
          target="_blank"
          href="https://github.com/soheilghanbary/next-cart-app"
          className="px-2"
        >
          GitHub
        </a>
        موجود است.
      </p>
    </footer>
  )
}
