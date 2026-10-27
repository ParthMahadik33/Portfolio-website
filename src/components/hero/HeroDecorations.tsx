"use client";

import React from "react";
import styles from "./Hero.module.scss";

export const HeroDecorations: React.FC = () => {
  return (
    <div className={styles.decorationsLayer} aria-hidden="true">
      <svg
        className={styles.birdsOverlay}
        viewBox="0 0 1024 571"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Flying Birds silhouettes - Exact vector trace from reference */}
        {/* Bird 1: High right soaring */}
        <path
          d="M 872 143 L 870 145 L 867 146 L 864 149 L 863 149 L 861 151 L 861 152 L 858 155 L 853 155 L 851 155 L 855 155 L 857 157 L 859 158 L 865 157 L 863 154 L 869 148 L 871 145 Z"
          fill="#171512"
        />
        {/* Bird 2: Gliding down-right */}
        <path
          d="M 830 180 L 824 187 L 822 189 L 821 188 L 819 189 L 820 193 L 817 198 L 817 204 L 819 203 L 820 203 L 821 202 L 824 198 L 826 195 L 826 192 L 829 190 L 828 187 L 829 185 L 834 180 Z"
          fill="#171512"
        />
        {/* Bird 3: Over sun upper rim */}
        <path
          d="M 773 176 L 774 179 L 771 183 L 771 188 L 767 191 L 764 193 L 766 193 L 769 192 L 773 190 L 774 187 Z"
          fill="#171512"
        />
        {/* Bird 4: Over sun center */}
        <path
          d="M 786 201 L 781 206 L 783 208 L 786 208 L 788 207 L 789 203 L 788 201 Z"
          fill="#171512"
        />
        {/* Bird 5: Over sun lower-left */}
        <path
          d="M 761 214 L 761 215 L 760 216 L 759 216 L 758 217 L 758 218 L 756 220 L 758 220 L 760 219 L 763 215 L 764 212 Z"
          fill="#171512"
        />
        {/* Bird 6: Follower */}
        <path
          d="M 831 209 L 831 212 L 834 211 L 836 209 L 835 206 Z"
          fill="#171512"
        />
      </svg>
    </div>
  );
};
