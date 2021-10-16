export default function Mail({
  className = 'block w-8 h-8',
  fill,
}: {
  className?: string;
  fill: string;
}): JSX.Element {
  return (
    <svg
      className={className}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6879 15.7073L10.7028 15.7019L10.7175 15.696L40.7021 3.70215C41.8388 3.29271 42.7301 3.44104 43.3096 3.84072C43.8875 4.23925 44.3461 5.01932 44.3461 6.26751V28.0175C44.3461 29.2836 43.8642 30.7204 43.0424 31.9672C42.2187 33.217 41.1239 34.1706 40.0044 34.5777L39.9895 34.5831L39.9747 34.589L9.99009 46.5829C8.8534 46.9923 7.96214 46.844 7.38261 46.4443C6.80474 46.0458 6.34613 45.2657 6.34613 44.0175V22.2675C6.34613 21.0014 6.82809 19.5646 7.64984 18.3178C8.47357 17.068 9.56841 16.1144 10.6879 15.7073ZM26.8178 23.4828L26.7471 23.5755L11.6954 18.0805L11.6777 18.0738C11.6593 18.067 11.6358 18.0587 11.6077 18.0493C11.5518 18.0307 11.4762 18.0075 11.3855 17.9849C11.2085 17.9406 10.9519 17.8925 10.6586 17.8925C10.0675 17.8925 9.21304 18.1063 8.72968 19.016C8.25625 19.7718 8.42152 20.5294 8.67045 21.0272C8.90034 21.487 9.24641 21.8323 9.37676 21.9624C9.38109 21.9667 9.38518 21.9708 9.38902 21.9746L9.45781 22.0434L9.53857 22.0976L26.2886 33.3476L27.1342 33.9156L27.6864 33.0596L42.6432 9.87671C42.9092 9.56191 43.0961 9.10342 43.0961 8.61126C43.0961 7.98939 42.7988 7.36742 42.1508 6.93546C41.0392 6.19439 39.6075 6.41023 39.0017 7.47653C38.4698 8.18192 35.391 12.2266 32.3943 16.1616C30.8475 18.1928 29.3241 20.1928 28.1874 21.685L26.8178 23.4828Z"
        fill={fill}
        stroke="#141214"
        strokeWidth="2"
      />
    </svg>
  );
}