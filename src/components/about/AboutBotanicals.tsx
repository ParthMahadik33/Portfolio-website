import React from "react";
import styles from "./About.module.scss";

interface AboutBotanicalsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const AboutBotanicals: React.FC<AboutBotanicalsProps> = ({
  className = "",
  style = {},
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${styles.botanicalSvg} ${className}`}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#171512" strokeLinecap="round" strokeLinejoin="round">
        {/* Main curved botanical stem */}
        <path
          d="M 195 180 C 160 145 118 100 75 65 C 50 45 28 28 8 10"
          strokeWidth="1.6"
          strokeOpacity="0.75"
        />

        {/* Leaf Cluster 1 (Terminal tip) */}
        <path
          d="M 8 10 C 4 6 0 3 2 0 C 8 2 12 6 8 10 Z"
          fill="#171512"
          fillOpacity="0.45"
          strokeWidth="0.8"
          strokeOpacity="0.7"
        />

        {/* Leaf Pair 2 */}
        <path
          d="M 28 28 C 18 20 8 18 12 14 C 20 15 27 21 28 28 Z"
          fill="#171512"
          fillOpacity="0.38"
          strokeWidth="0.8"
          strokeOpacity="0.65"
        />
        <path
          d="M 32 31 C 36 20 44 14 47 18 C 44 24 38 29 32 31 Z"
          fill="#171512"
          fillOpacity="0.38"
          strokeWidth="0.8"
          strokeOpacity="0.65"
        />

        {/* Leaf Pair 3 */}
        <path
          d="M 48 45 C 34 35 22 34 26 28 C 36 30 46 38 48 45 Z"
          fill="#171512"
          fillOpacity="0.38"
          strokeWidth="0.8"
          strokeOpacity="0.65"
        />
        <path
          d="M 54 49 C 62 36 74 30 77 35 C 72 43 62 49 54 49 Z"
          fill="#171512"
          fillOpacity="0.38"
          strokeWidth="0.8"
          strokeOpacity="0.65"
        />

        {/* Subsidiary Stem A (Branching upward) */}
        <path
          d="M 75 65 C 90 48 112 30 135 15"
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
        <path
          d="M 94 48 C 84 38 74 37 78 32 C 88 34 94 42 94 48 Z"
          fill="#171512"
          fillOpacity="0.35"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        <path
          d="M 102 42 C 112 30 124 24 126 29 C 120 37 110 42 102 42 Z"
          fill="#171512"
          fillOpacity="0.35"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        <path
          d="M 118 28 C 110 18 102 18 106 14 C 114 16 118 23 118 28 Z"
          fill="#171512"
          fillOpacity="0.35"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        <path
          d="M 124 23 C 134 12 144 8 147 12 C 142 19 132 23 124 23 Z"
          fill="#171512"
          fillOpacity="0.35"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        <path
          d="M 135 15 C 138 9 144 5 146 8 C 144 14 139 17 135 15 Z"
          fill="#171512"
          fillOpacity="0.45"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />

        {/* Leaf Pair 4 (on main stem) */}
        <path
          d="M 92 80 C 74 72 58 74 62 66 C 75 68 88 75 92 80 Z"
          fill="#171512"
          fillOpacity="0.38"
          strokeWidth="0.8"
          strokeOpacity="0.65"
        />

        {/* Subsidiary Stem B (Branching downward) */}
        <path
          d="M 118 100 C 142 85 168 72 192 60"
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
        <path
          d="M 134 92 C 132 78 126 68 132 66 C 138 74 138 86 134 92 Z"
          fill="#171512"
          fillOpacity="0.35"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        <path
          d="M 148 83 C 160 72 172 65 174 70 C 168 78 156 83 148 83 Z"
          fill="#171512"
          fillOpacity="0.35"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        <path
          d="M 166 74 C 162 60 156 52 162 50 C 167 58 168 68 166 74 Z"
          fill="#171512"
          fillOpacity="0.35"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        <path
          d="M 178 67 C 188 56 198 50 200 55 C 196 62 186 67 178 67 Z"
          fill="#171512"
          fillOpacity="0.35"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />

        {/* Subsidiary Stem C (Lower curve) */}
        <path
          d="M 145 125 C 130 144 112 165 92 182"
          strokeWidth="1.1"
          strokeOpacity="0.65"
        />
        <path
          d="M 138 134 C 150 142 160 150 156 155 C 146 148 138 140 138 134 Z"
          fill="#171512"
          fillOpacity="0.32"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        <path
          d="M 126 146 C 112 150 102 155 104 160 C 114 157 122 152 126 146 Z"
          fill="#171512"
          fillOpacity="0.32"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        <path
          d="M 114 158 C 124 168 132 176 128 180 C 118 174 112 166 114 158 Z"
          fill="#171512"
          fillOpacity="0.32"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />

        {/* Fine leaf vein lines */}
        <path d="M 8 10 L 4 3" strokeWidth="0.5" strokeOpacity="0.5" />
        <path d="M 28 28 L 18 18" strokeWidth="0.5" strokeOpacity="0.5" />
        <path d="M 32 31 L 42 21" strokeWidth="0.5" strokeOpacity="0.5" />
        <path d="M 48 45 L 34 34" strokeWidth="0.5" strokeOpacity="0.5" />
        <path d="M 54 49 L 68 39" strokeWidth="0.5" strokeOpacity="0.5" />
      </g>
    </svg>
  );
};
