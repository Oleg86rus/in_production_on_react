import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ["i18next-extract",
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    }

    const refresh = {
        // for TypeScript, change the following to "\.[jt]sx?"
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
            // ... other loaders
            {
                loader: require.resolve('babel-loader'),
                options: {
                    // ... other options
                    // DO NOT apply the plugin in production mode!
                    plugins: [require.resolve('react-refresh/babel')],
                },
            },
        ],
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const fileLoader = {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
    }

    const sccLoader =  {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:8]'
                                : '[hash:base64:8]'
                        },
                    }
                },
                "sass-loader",
            ],
    }

//  Если не используем TS - нужен babel-loader
    const typescriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        sccLoader,
        svgLoader,
        fileLoader,
        refresh,
        babelLoader,
        typescriptLoader
    ]
}