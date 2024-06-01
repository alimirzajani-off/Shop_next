import { EmailBox } from "@/components/EmailBox/EmailBox";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-full bg-neutral-000 border-t	border-solid border-n-200 py-8 mt-12">
      <div className="flex flex-wrap justify-between w-full px-4">
        <div className="w-56 px-4 mt-8">
          <h3 className="text-neutral-700 text-h5 mb-2">با دی تحریر</h3>
          <p className="text-body-1 text-neutral-500 mb-2">اتاق خبر دی تحریر</p>
          <p className="text-body-1 text-neutral-500 mb-2">فروش در دی تحریر</p>
          <p className="text-body-1 text-neutral-500 mb-2">فرصت های شغلی</p>
          <p className="text-body-1 text-neutral-500 mb-2">گزارش تخلف</p>
        </div>
        <div className="w-56 px-4 mt-8">
          <h3 className="text-neutral-700 text-h5 mb-2">خدمات مشتریان</h3>
          <p className="text-body-1 text-neutral-500 mb-2">
            پاسخ به پرسش های متداول
          </p>
          <p className="text-body-1 text-neutral-500 mb-2">شرایط استفاده </p>
          <p className="text-body-1 text-neutral-500 mb-2">حریم خصوصی</p>
          <p className="text-body-1 text-neutral-500 mb-2">گزارش باگ</p>
        </div>
        <div className="w-56 px-4 mt-8">
          <h3 className="text-neutral-700 text-h5 mb-2">راهنمای خرید از ما</h3>
          <p className="text-body-1 text-neutral-500 mb-2">نحوه ثبت سفارش</p>
          <p className="text-body-1 text-neutral-500 mb-2">رویه ارسال سفارش</p>
          <p className="text-body-1 text-neutral-500 mb-2">شیوه پرداخت</p>
        </div>
        <div className="flex items-start flex-col text-center w-56 px-4 mt-8">
          <div>
            <h3 className="text-neutral-700 text-h5 mb-2">همراه ما باشید !</h3>
          </div>
          <div className="flex justify-center">
            <div className="m-1">
              <FiInstagram />
            </div>
            <div className="m-1">
              <FiTwitter />
            </div>
            <div className="m-1">
              <FiLinkedin />
            </div>
          </div>
          <div>
            <p className="text-right text-h5 text-neutral-700 mb-3">
              با ثبت ایمیل از تخفیف های ما با خبر شوید
            </p>
            <div>
              <EmailBox />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
