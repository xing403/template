export function buildBackground(sourcePath: string, targetPath: string) {

  /** eslint-disable-next-line @typescript-eslint/no-var-requires */
  require('esbuild').buildSync({
    entryPoints: [sourcePath],
    outfile: targetPath,
    bundle: true,
    platform: 'node',
    target: 'node16',
    external: ['electron']
  })
}
