import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const babelLoader = buildBabelLoader(options);

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
    };
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    //  Если не используем TS - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        cssLoader,
        svgLoader,
        fileLoader,
        refresh,
        babelLoader,
        typescriptLoader,
    ];
}
