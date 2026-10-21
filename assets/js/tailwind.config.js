/**
 * Tailwind CSS Configuration for Azeria Portfolio
 */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "surface-container-lowest": "#ffffff",
                "tertiary-fixed-dim": "#c4c7c9",
                "secondary-fixed-dim": "#b7c8e1",
                "primary": "#004ac6",
                "on-tertiary-fixed-variant": "#444749",
                "surface-dim": "#d2d9f4",
                "inverse-on-surface": "#eef0ff",
                "error-container": "#ffdad6",
                "surface-bright": "#faf8ff",
                "inverse-surface": "#283044",
                "on-secondary-fixed-variant": "#38485d",
                "surface-container-low": "#f2f3ff",
                "on-secondary": "#ffffff",
                "on-error": "#ffffff",
                "on-error-container": "#93000a",
                "tertiary-fixed": "#e0e3e5",
                "primary-fixed-dim": "#b4c5ff",
                "surface-variant": "#dae2fd",
                "on-tertiary": "#ffffff",
                "on-tertiary-fixed": "#191c1e",
                "on-background": "#131b2e",
                "primary-fixed": "#dbe1ff",
                "error": "#ba1a1a",
                "background": "#faf8ff",
                "tertiary-container": "#6b6e70",
                "on-surface": "#131b2e",
                "surface-container-high": "#e2e7ff",
                "outline": "#737686",
                "surface-tint": "#0053db",
                "on-primary-container": "#eeefff",
                "on-primary": "#ffffff",
                "on-secondary-fixed": "#0b1c30",
                "tertiary": "#525657",
                "on-surface-variant": "#434655",
                "surface-container": "#eaedff",
                "surface-container-highest": "#dae2fd",
                "on-primary-fixed": "#00174b",
                "on-primary-fixed-variant": "#003ea8",
                "primary-container": "#2563eb",
                "inverse-primary": "#b4c5ff",
                "on-tertiary-container": "#eff1f3",
                "secondary": "#505f76",
                "secondary-fixed": "#d3e4fe",
                "surface": "#faf8ff",
                "on-secondary-container": "#54647a",
                "outline-variant": "#c3c6d7",
                "secondary-container": "#d0e1fb"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                "section-gap": "80px",
                "stack-lg": "32px",
                "stack-sm": "8px",
                "margin-mobile": "16px",
                "stack-md": "16px",
                "gutter": "24px",
                "container-max": "1200px"
            },
            fontFamily: {
                "body-md": ["Inter", "sans-serif"],
                "headline-lg-mobile": ["Inter", "sans-serif"],
                "headline-lg": ["Inter", "sans-serif"],
                "caption": ["Inter", "sans-serif"],
                "label-mono": ["JetBrains Mono", "monospace"],
                "headline-xl": ["Inter", "sans-serif"]
            },
            fontSize: {
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
                "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
                "caption": ["12px", { lineHeight: "16px", fontWeight: "500" }],
                "label-mono": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
                "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }]
            }
        }
    }
};
