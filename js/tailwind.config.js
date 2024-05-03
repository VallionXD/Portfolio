tailwind.config = {
    theme: {
        extend: {
            colors: {
                topbarBackground: "#0c0c0c",
                topbarBorder: "#303030",
                semiTransparent: "#00000090",
                semiTransparent2: "#00000040",
            },
            backgroundSize: {
                "300%": "300%",
            },
        },
    },
    variants: {
      extend: {
        animation: ['hover'],
      },
    },
    plugins: [],
};
