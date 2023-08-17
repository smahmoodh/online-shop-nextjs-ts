import MenuItem from "@/components/Menu/MenuItem/MenuItem";
import Menu from "@/components/Menu/Menu";

import "./FooterMenu.css";

const FooterMenu = () => {
  return (
    <Menu cssClass="footer__menu block md:flex md:flex-wrap">
      <MenuItem
        cssClass="footer__menu-item"
        link=""
        title="راهنمای خرید از سایت"
        text="راهنمای خرید از سایت"
      >
        <Menu>
          <MenuItem link="/how-to-order" title="ثبت سفارش" text="ثبت سفارش" />
          <MenuItem
            link="/delivery"
            title="رویه ارسال سفارشات"
            text="رویه ارسال سفارشات"
          />
          <MenuItem
            link="/track-order"
            title="پیگیری سفارش"
            text="پیگیری سفارش"
          />
          <MenuItem
            link="/payment-order"
            title="راهنمای پرداخت"
            text="راهنمای پرداخت"
          />
        </Menu>
      </MenuItem>
      <MenuItem
        cssClass="footer__menu-item"
        link=""
        title="خدمات مشتریان"
        text="خدمات مشتریان"
      >
        <Menu>
          <MenuItem
            link="/faq"
            title="پاسخ به سوالات متداول"
            text="پاسخ به سوالات متداول"
          />
          <MenuItem
            link="/return-policy"
            title="رویه بازگرداندن کالا"
            text="رویه بازگرداندن کالا"
          />
          <MenuItem link="/privacy" title="حریم خصوصی" text="حریم خصوصی" />
          <MenuItem link="/term" title="شرایط استفاده" text="شرایط استفاده" />
        </Menu>
      </MenuItem>
      <MenuItem
        cssClass="footer__menu-item"
        link=""
        title="درباره ما"
        text="درباره ما"
      >
        <Menu>
          <MenuItem link="/about" title="درباره ما" text="درباره ما" />
          <MenuItem link="/contact-us" title="تماس با ما" text="تماس با ما" />
          <MenuItem
            link="/collaborations"
            title="همکاری با ما"
            text="همکاری با ما"
          />
          <MenuItem link="/blog" title="وبلاگ ما" text="وبلاگ ما" />
        </Menu>
      </MenuItem>
    </Menu>
  );
};

export default FooterMenu;
