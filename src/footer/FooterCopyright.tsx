const FooterCopyright = () => (
  <div className="footer-copyright">
    © {new Date().getFullYear()} Gingerblocks. All rights reserved.
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
