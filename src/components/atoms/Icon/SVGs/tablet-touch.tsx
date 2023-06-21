import classNames from 'classnames';
import { IconPropsDefaults } from '../icons-map';
import { IconSVG } from '../types';

export const TabletTouch: React.FC<IconSVG> = ({
  className = IconPropsDefaults.className,
  color = IconPropsDefaults.color,
  size = IconPropsDefaults.size,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames([className, color])}
    >
      <path d="M11.1667 33.715C11.3649 32.9002 11.7225 32.1327 12.2188 31.4567C12.7151 30.7808 13.3403 30.2098 14.0583 29.7767C14.1172 29.7381 14.1623 29.6818 14.1872 29.616C14.2122 29.5502 14.2156 29.4782 14.1971 29.4103C14.1786 29.3424 14.1391 29.2821 14.0842 29.238C14.0294 29.194 13.962 29.1684 13.8917 29.165H8.33333C7.89131 29.165 7.46738 28.9894 7.15482 28.6768C6.84226 28.3643 6.66667 27.9404 6.66667 27.4983V7.5C6.66667 7.05797 6.84226 6.63405 7.15482 6.32149C7.46738 6.00893 7.89131 5.83333 8.33333 5.83333H28.3333C28.7754 5.83333 29.1993 6.00893 29.5118 6.32149C29.8244 6.63405 30 7.05797 30 7.5V26.8333C30 26.9438 30.0439 27.0498 30.122 27.128C30.2002 27.2061 30.3062 27.25 30.4167 27.25H31.6667C32.3324 27.2617 32.9943 27.3529 33.6383 27.5217C33.7001 27.538 33.7647 27.54 33.8273 27.5273C33.8899 27.5147 33.9488 27.4879 33.9994 27.4489C34.0499 27.4099 34.0909 27.3598 34.119 27.3025C34.1472 27.2452 34.1618 27.1822 34.1617 27.1183V4.16667C34.1617 3.06246 33.7234 2.00341 32.943 1.22215C32.1627 0.440897 31.1042 0.00132504 30 0L6.66667 0C5.5616 0 4.50179 0.438987 3.72039 1.22039C2.93899 2.00179 2.5 3.0616 2.5 4.16667V32.5C2.5 33.6051 2.93899 34.6649 3.72039 35.4463C4.50179 36.2277 5.5616 36.6667 6.66667 36.6667H10.6667C10.7268 36.6666 10.7861 36.6536 10.8407 36.6285C10.8954 36.6035 10.944 36.5671 10.9833 36.5217C11.0217 36.4759 11.05 36.4226 11.0664 36.3651C11.0827 36.3077 11.0868 36.2475 11.0783 36.1883C10.9445 35.3661 10.9745 34.5256 11.1667 33.715Z" />
      <path d="M14.9998 9.58154H11.6665C10.9761 9.58154 10.4165 10.1412 10.4165 10.8315V14.1649C10.4165 14.8552 10.9761 15.4149 11.6665 15.4149H14.9998C15.6902 15.4149 16.2498 14.8552 16.2498 14.1649V10.8315C16.2498 10.1412 15.6902 9.58154 14.9998 9.58154Z" />
      <path d="M24.9998 9.58154H21.6665C20.9761 9.58154 20.4165 10.1412 20.4165 10.8315V14.1649C20.4165 14.8552 20.9761 15.4149 21.6665 15.4149H24.9998C25.6902 15.4149 26.2498 14.8552 26.2498 14.1649V10.8315C26.2498 10.1412 25.6902 9.58154 24.9998 9.58154Z" />
      <path d="M14.9998 18.7485H11.6665C10.9761 18.7485 10.4165 19.3082 10.4165 19.9985V23.3319C10.4165 24.0222 10.9761 24.5819 11.6665 24.5819H14.9998C15.6902 24.5819 16.2498 24.0222 16.2498 23.3319V19.9985C16.2498 19.3082 15.6902 18.7485 14.9998 18.7485Z" />
      <path d="M31.6667 29.7535H27.9167C27.8062 29.7535 27.7002 29.7096 27.6221 29.6315C27.544 29.5533 27.5001 29.4473 27.5001 29.3368V21.8335C27.5001 20.8389 27.105 19.8851 26.4017 19.1818C25.6985 18.4786 24.7446 18.0835 23.7501 18.0835C22.7555 18.0835 21.8017 18.4786 21.0984 19.1818C20.3952 19.8851 20.0001 20.8389 20.0001 21.8335V31.6168C20 31.6913 19.98 31.7644 19.9422 31.8286C19.9044 31.8927 19.8501 31.9456 19.7851 31.9818C19.7198 32.0178 19.6461 32.0356 19.5716 32.0332C19.4971 32.0309 19.4246 32.0085 19.3617 31.9685C18.6396 31.5123 17.7852 31.3117 16.9355 31.3987C16.0857 31.4858 15.2898 31.8555 14.6751 32.4486C14.0605 33.0418 13.6627 33.8241 13.5454 34.6701C13.4281 35.5162 13.5982 36.3772 14.0284 37.1152L15.1417 39.3118C15.2918 39.6075 15.5532 39.8315 15.8684 39.9345C16.1836 40.0375 16.5268 40.0111 16.8226 39.861C17.1183 39.7109 17.3423 39.4495 17.4453 39.1343C17.5482 38.8191 17.5218 38.4759 17.3717 38.1802L16.2051 35.8868C16.0269 35.6019 15.9644 35.2596 16.0304 34.9301C16.0964 34.6006 16.286 34.3088 16.5602 34.1144C16.8344 33.9201 17.1725 33.838 17.5053 33.885C17.838 33.9319 18.1403 34.1043 18.3501 34.3668L20.2817 36.7802C20.4443 36.9793 20.6643 37.1235 20.9118 37.1931C21.1593 37.2627 21.4222 37.2543 21.6647 37.169C21.9073 37.0837 22.1176 36.9257 22.2671 36.7166C22.4166 36.5074 22.4979 36.2572 22.5001 36.0002V21.8335C22.5001 21.502 22.6318 21.184 22.8662 20.9496C23.1006 20.7152 23.4185 20.5835 23.7501 20.5835C24.0816 20.5835 24.3995 20.7152 24.6339 20.9496C24.8684 21.184 25.0001 21.502 25.0001 21.8335V31.0002C25.0001 31.3317 25.1318 31.6496 25.3662 31.884C25.6006 32.1185 25.9185 32.2502 26.2501 32.2502H31.6467C32.5584 32.304 33.4146 32.7057 34.0386 33.3725C34.6626 34.0393 35.0068 34.9203 35.0001 35.8335V38.7502C35.0001 39.0817 35.1318 39.3996 35.3662 39.634C35.6006 39.8685 35.9185 40.0002 36.2501 40.0002C36.5816 40.0002 36.8995 39.8685 37.1339 39.634C37.3684 39.3996 37.5001 39.0817 37.5001 38.7502V35.8335C37.5127 34.2595 36.9098 32.7428 35.8201 31.607C34.7303 30.4712 33.2399 29.806 31.6667 29.7535Z" />{' '}
    </svg>
  );
};