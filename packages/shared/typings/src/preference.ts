interface Preference {
  // ==============================
  // ========== app 配置 ===========
  // ==============================
  /** 应用名 */
  appName: string;
  /** 应用Logo */
  logo: string;
  /** 应用默认头像 */
  defaultAvatar: string;

  // ==============================
  // ========== 设计 配置 ==========
  // ==============================
  /** 主题色 */
  colorPrimary: string;
  /** 是否开启黑暗模式 */
  dark: boolean;
  /** 是否开启紧凑模式 */
  compact: boolean;
}

export type { Preference };
