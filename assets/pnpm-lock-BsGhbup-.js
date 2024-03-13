const n=`lockfileVersion: '6.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

dependencies:
  ace-builds:
    specifier: ^1.32.7
    version: 1.32.7
  vue:
    specifier: ^3.4.21
    version: 3.4.21
  vue3-ace-editor:
    specifier: ^2.2.4
    version: 2.2.4(ace-builds@1.32.7)(vue@3.4.21)

devDependencies:
  '@vitejs/plugin-vue':
    specifier: ^5.0.4
    version: 5.0.4(vite@5.1.6)(vue@3.4.21)
  sass:
    specifier: ^1.71.1
    version: 1.71.1
  vite:
    specifier: ^5.1.6
    version: 5.1.6(sass@1.71.1)

packages:

  /@babel/helper-string-parser@7.23.4:
    resolution: {integrity: sha512-803gmbQdqwdf4olxrX4AJyFBV/RTr3rSmOj0rKwesmzlfhYNDEs+/iOcznzpNWlJlIlTJC2QfPFcHB6DlzdVLQ==}
    engines: {node: '>=6.9.0'}

  /@babel/helper-validator-identifier@7.22.20:
    resolution: {integrity: sha512-Y4OZ+ytlatR8AI+8KZfKuL5urKp7qey08ha31L8b3BwewJAoJamTzyvxPR/5D+KkdJCGPq/+8TukHBlY10FX9A==}
    engines: {node: '>=6.9.0'}

  /@babel/parser@7.24.0:
    resolution: {integrity: sha512-QuP/FxEAzMSjXygs8v4N9dvdXzEHN4W1oF3PxuWAtPo08UdM17u89RDMgjLn/mlc56iM0HlLmVkO/wgR+rDgHg==}
    engines: {node: '>=6.0.0'}
    hasBin: true
    dependencies:
      '@babel/types': 7.24.0

  /@babel/types@7.24.0:
    resolution: {integrity: sha512-+j7a5c253RfKh8iABBhywc8NSfP5LURe7Uh4qpsh6jc+aLJguvmIUBdjSdEMQv2bENrCR5MfRdjGo7vzS/ob7w==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-string-parser': 7.23.4
      '@babel/helper-validator-identifier': 7.22.20
      to-fast-properties: 2.0.0

  /@esbuild/aix-ppc64@0.19.12:
    resolution: {integrity: sha512-bmoCYyWdEL3wDQIVbcyzRyeKLgk2WtWLTWz1ZIAZF/EGbNOwSA6ew3PftJ1PqMiOOGu0OyFMzG53L0zqIpPeNA==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [aix]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/android-arm64@0.19.12:
    resolution: {integrity: sha512-P0UVNGIienjZv3f5zq0DP3Nt2IE/3plFzuaS96vihvD0Hd6H/q4WXUGpCxD/E8YrSXfNyRPbpTq+T8ZQioSuPA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/android-arm@0.19.12:
    resolution: {integrity: sha512-qg/Lj1mu3CdQlDEEiWrlC4eaPZ1KztwGJ9B6J+/6G+/4ewxJg7gqj8eVYWvao1bXrqGiW2rsBZFSX3q2lcW05w==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/android-x64@0.19.12:
    resolution: {integrity: sha512-3k7ZoUW6Q6YqhdhIaq/WZ7HwBpnFBlW905Fa4s4qWJyiNOgT1dOqDiVAQFwBH7gBRZr17gLrlFCRzF6jFh7Kew==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/darwin-arm64@0.19.12:
    resolution: {integrity: sha512-B6IeSgZgtEzGC42jsI+YYu9Z3HKRxp8ZT3cqhvliEHovq8HSX2YX8lNocDn79gCKJXOSaEot9MVYky7AKjCs8g==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/darwin-x64@0.19.12:
    resolution: {integrity: sha512-hKoVkKzFiToTgn+41qGhsUJXFlIjxI/jSYeZf3ugemDYZldIXIxhvwN6erJGlX4t5h417iFuheZ7l+YVn05N3A==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/freebsd-arm64@0.19.12:
    resolution: {integrity: sha512-4aRvFIXmwAcDBw9AueDQ2YnGmz5L6obe5kmPT8Vd+/+x/JMVKCgdcRwH6APrbpNXsPz+K653Qg8HB/oXvXVukA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/freebsd-x64@0.19.12:
    resolution: {integrity: sha512-EYoXZ4d8xtBoVN7CEwWY2IN4ho76xjYXqSXMNccFSx2lgqOG/1TBPW0yPx1bJZk94qu3tX0fycJeeQsKovA8gg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-arm64@0.19.12:
    resolution: {integrity: sha512-EoTjyYyLuVPfdPLsGVVVC8a0p1BFFvtpQDB/YLEhaXyf/5bczaGeN15QkR+O4S5LeJ92Tqotve7i1jn35qwvdA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-arm@0.19.12:
    resolution: {integrity: sha512-J5jPms//KhSNv+LO1S1TX1UWp1ucM6N6XuL6ITdKWElCu8wXP72l9MM0zDTzzeikVyqFE6U8YAV9/tFyj0ti+w==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-ia32@0.19.12:
    resolution: {integrity: sha512-Thsa42rrP1+UIGaWz47uydHSBOgTUnwBwNq59khgIwktK6x60Hivfbux9iNR0eHCHzOLjLMLfUMLCypBkZXMHA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-loong64@0.19.12:
    resolution: {integrity: sha512-LiXdXA0s3IqRRjm6rV6XaWATScKAXjI4R4LoDlvO7+yQqFdlr1Bax62sRwkVvRIrwXxvtYEHHI4dm50jAXkuAA==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-mips64el@0.19.12:
    resolution: {integrity: sha512-fEnAuj5VGTanfJ07ff0gOA6IPsvrVHLVb6Lyd1g2/ed67oU1eFzL0r9WL7ZzscD+/N6i3dWumGE1Un4f7Amf+w==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-ppc64@0.19.12:
    resolution: {integrity: sha512-nYJA2/QPimDQOh1rKWedNOe3Gfc8PabU7HT3iXWtNUbRzXS9+vgB0Fjaqr//XNbd82mCxHzik2qotuI89cfixg==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-riscv64@0.19.12:
    resolution: {integrity: sha512-2MueBrlPQCw5dVJJpQdUYgeqIzDQgw3QtiAHUC4RBz9FXPrskyyU3VI1hw7C0BSKB9OduwSJ79FTCqtGMWqJHg==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-s390x@0.19.12:
    resolution: {integrity: sha512-+Pil1Nv3Umes4m3AZKqA2anfhJiVmNCYkPchwFJNEJN5QxmTs1uzyy4TvmDrCRNT2ApwSari7ZIgrPeUx4UZDg==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-x64@0.19.12:
    resolution: {integrity: sha512-B71g1QpxfwBvNrfyJdVDexenDIt1CiDN1TIXLbhOw0KhJzE78KIFGX6OJ9MrtC0oOqMWf+0xop4qEU8JrJTwCg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/netbsd-x64@0.19.12:
    resolution: {integrity: sha512-3ltjQ7n1owJgFbuC61Oj++XhtzmymoCihNFgT84UAmJnxJfm4sYCiSLTXZtE00VWYpPMYc+ZQmB6xbSdVh0JWA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/openbsd-x64@0.19.12:
    resolution: {integrity: sha512-RbrfTB9SWsr0kWmb9srfF+L933uMDdu9BIzdA7os2t0TXhCRjrQyCeOt6wVxr79CKD4c+p+YhCj31HBkYcXebw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/sunos-x64@0.19.12:
    resolution: {integrity: sha512-HKjJwRrW8uWtCQnQOz9qcU3mUZhTUQvi56Q8DPTLLB+DawoiQdjsYq+j+D3s9I8VFtDr+F9CjgXKKC4ss89IeA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/win32-arm64@0.19.12:
    resolution: {integrity: sha512-URgtR1dJnmGvX864pn1B2YUYNzjmXkuJOIqG2HdU62MVS4EHpU2946OZoTMnRUHklGtJdJZ33QfzdjGACXhn1A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/win32-ia32@0.19.12:
    resolution: {integrity: sha512-+ZOE6pUkMOJfmxmBZElNOx72NKpIa/HFOMGzu8fqzQJ5kgf6aTGrcJaFsNiVMH4JKpMipyK+7k0n2UXN7a8YKQ==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/win32-x64@0.19.12:
    resolution: {integrity: sha512-T1QyPSDCyMXaO3pzBkF96E8xMkiRYbUEZADd29SyPGabqxMViNoii+NcK7eWJAEoU6RZyEm5lVSIjTmcdoB9HA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@jridgewell/sourcemap-codec@1.4.15:
    resolution: {integrity: sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg==}

  /@rollup/rollup-android-arm-eabi@4.13.0:
    resolution: {integrity: sha512-5ZYPOuaAqEH/W3gYsRkxQATBW3Ii1MfaT4EQstTnLKViLi2gLSQmlmtTpGucNP3sXEpOiI5tdGhjdE111ekyEg==}
    cpu: [arm]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-android-arm64@4.13.0:
    resolution: {integrity: sha512-BSbaCmn8ZadK3UAQdlauSvtaJjhlDEjS5hEVVIN3A4bbl3X+otyf/kOJV08bYiRxfejP3DXFzO2jz3G20107+Q==}
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-darwin-arm64@4.13.0:
    resolution: {integrity: sha512-Ovf2evVaP6sW5Ut0GHyUSOqA6tVKfrTHddtmxGQc1CTQa1Cw3/KMCDEEICZBbyppcwnhMwcDce9ZRxdWRpVd6g==}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-darwin-x64@4.13.0:
    resolution: {integrity: sha512-U+Jcxm89UTK592vZ2J9st9ajRv/hrwHdnvyuJpa5A2ngGSVHypigidkQJP+YiGL6JODiUeMzkqQzbCG3At81Gg==}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-arm-gnueabihf@4.13.0:
    resolution: {integrity: sha512-8wZidaUJUTIR5T4vRS22VkSMOVooG0F4N+JSwQXWSRiC6yfEsFMLTYRFHvby5mFFuExHa/yAp9juSphQQJAijQ==}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-arm64-gnu@4.13.0:
    resolution: {integrity: sha512-Iu0Kno1vrD7zHQDxOmvweqLkAzjxEVqNhUIXBsZ8hu8Oak7/5VTPrxOEZXYC1nmrBVJp0ZcL2E7lSuuOVaE3+w==}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-arm64-musl@4.13.0:
    resolution: {integrity: sha512-C31QrW47llgVyrRjIwiOwsHFcaIwmkKi3PCroQY5aVq4H0A5v/vVVAtFsI1nfBngtoRpeREvZOkIhmRwUKkAdw==}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-riscv64-gnu@4.13.0:
    resolution: {integrity: sha512-Oq90dtMHvthFOPMl7pt7KmxzX7E71AfyIhh+cPhLY9oko97Zf2C9tt/XJD4RgxhaGeAraAXDtqxvKE1y/j35lA==}
    cpu: [riscv64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-x64-gnu@4.13.0:
    resolution: {integrity: sha512-yUD/8wMffnTKuiIsl6xU+4IA8UNhQ/f1sAnQebmE/lyQ8abjsVyDkyRkWop0kdMhKMprpNIhPmYlCxgHrPoXoA==}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-x64-musl@4.13.0:
    resolution: {integrity: sha512-9RyNqoFNdF0vu/qqX63fKotBh43fJQeYC98hCaf89DYQpv+xu0D8QFSOS0biA7cGuqJFOc1bJ+m2rhhsKcw1hw==}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-win32-arm64-msvc@4.13.0:
    resolution: {integrity: sha512-46ue8ymtm/5PUU6pCvjlic0z82qWkxv54GTJZgHrQUuZnVH+tvvSP0LsozIDsCBFO4VjJ13N68wqrKSeScUKdA==}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-win32-ia32-msvc@4.13.0:
    resolution: {integrity: sha512-P5/MqLdLSlqxbeuJ3YDeX37srC8mCflSyTrUsgbU1c/U9j6l2g2GiIdYaGD9QjdMQPMSgYm7hgg0551wHyIluw==}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-win32-x64-msvc@4.13.0:
    resolution: {integrity: sha512-UKXUQNbO3DOhzLRwHSpa0HnhhCgNODvfoPWv2FCXme8N/ANFfhIPMGuOT+QuKd16+B5yxZ0HdpNlqPvTMS1qfw==}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@types/estree@1.0.5:
    resolution: {integrity: sha512-/kYRxGDLWzHOB7q+wtSUQlFrtcdUccpfy+X+9iMBpHK8QLLhx2wIPYuS5DYtR9Wa/YlZAbIovy7qVdB1Aq6Lyw==}
    dev: true

  /@vitejs/plugin-vue@5.0.4(vite@5.1.6)(vue@3.4.21):
    resolution: {integrity: sha512-WS3hevEszI6CEVEx28F8RjTX97k3KsrcY6kvTg7+Whm5y3oYvcqzVeGCU3hxSAn4uY2CLCkeokkGKpoctccilQ==}
    engines: {node: ^18.0.0 || >=20.0.0}
    peerDependencies:
      vite: ^5.0.0
      vue: ^3.2.25
    dependencies:
      vite: 5.1.6(sass@1.71.1)
      vue: 3.4.21
    dev: true

  /@vue/compiler-core@3.4.21:
    resolution: {integrity: sha512-MjXawxZf2SbZszLPYxaFCjxfibYrzr3eYbKxwpLR9EQN+oaziSu3qKVbwBERj1IFIB8OLUewxB5m/BFzi613og==}
    dependencies:
      '@babel/parser': 7.24.0
      '@vue/shared': 3.4.21
      entities: 4.5.0
      estree-walker: 2.0.2
      source-map-js: 1.0.2

  /@vue/compiler-dom@3.4.21:
    resolution: {integrity: sha512-IZC6FKowtT1sl0CR5DpXSiEB5ayw75oT2bma1BEhV7RRR1+cfwLrxc2Z8Zq/RGFzJ8w5r9QtCOvTjQgdn0IKmA==}
    dependencies:
      '@vue/compiler-core': 3.4.21
      '@vue/shared': 3.4.21

  /@vue/compiler-sfc@3.4.21:
    resolution: {integrity: sha512-me7epoTxYlY+2CUM7hy9PCDdpMPfIwrOvAXud2Upk10g4YLv9UBW7kL798TvMeDhPthkZ0CONNrK2GoeI1ODiQ==}
    dependencies:
      '@babel/parser': 7.24.0
      '@vue/compiler-core': 3.4.21
      '@vue/compiler-dom': 3.4.21
      '@vue/compiler-ssr': 3.4.21
      '@vue/shared': 3.4.21
      estree-walker: 2.0.2
      magic-string: 0.30.8
      postcss: 8.4.35
      source-map-js: 1.0.2

  /@vue/compiler-ssr@3.4.21:
    resolution: {integrity: sha512-M5+9nI2lPpAsgXOGQobnIueVqc9sisBFexh5yMIMRAPYLa7+5wEJs8iqOZc1WAa9WQbx9GR2twgznU8LTIiZ4Q==}
    dependencies:
      '@vue/compiler-dom': 3.4.21
      '@vue/shared': 3.4.21

  /@vue/reactivity@3.4.21:
    resolution: {integrity: sha512-UhenImdc0L0/4ahGCyEzc/pZNwVgcglGy9HVzJ1Bq2Mm9qXOpP8RyNTjookw/gOCUlXSEtuZ2fUg5nrHcoqJcw==}
    dependencies:
      '@vue/shared': 3.4.21

  /@vue/runtime-core@3.4.21:
    resolution: {integrity: sha512-pQthsuYzE1XcGZznTKn73G0s14eCJcjaLvp3/DKeYWoFacD9glJoqlNBxt3W2c5S40t6CCcpPf+jG01N3ULyrA==}
    dependencies:
      '@vue/reactivity': 3.4.21
      '@vue/shared': 3.4.21

  /@vue/runtime-dom@3.4.21:
    resolution: {integrity: sha512-gvf+C9cFpevsQxbkRBS1NpU8CqxKw0ebqMvLwcGQrNpx6gqRDodqKqA+A2VZZpQ9RpK2f9yfg8VbW/EpdFUOJw==}
    dependencies:
      '@vue/runtime-core': 3.4.21
      '@vue/shared': 3.4.21
      csstype: 3.1.3

  /@vue/server-renderer@3.4.21(vue@3.4.21):
    resolution: {integrity: sha512-aV1gXyKSN6Rz+6kZ6kr5+Ll14YzmIbeuWe7ryJl5muJ4uwSwY/aStXTixx76TwkZFJLm1aAlA/HSWEJ4EyiMkg==}
    peerDependencies:
      vue: 3.4.21
    dependencies:
      '@vue/compiler-ssr': 3.4.21
      '@vue/shared': 3.4.21
      vue: 3.4.21

  /@vue/shared@3.4.21:
    resolution: {integrity: sha512-PuJe7vDIi6VYSinuEbUIQgMIRZGgM8e4R+G+/dQTk0X1NEdvgvvgv7m+rfmDH1gZzyA1OjjoWskvHlfRNfQf3g==}

  /ace-builds@1.32.7:
    resolution: {integrity: sha512-ziv35kaYELFw4suWlotz/Xsl1/1LhWAbwFoD3zIgCgP9gXGECEsAM4GhiB0T0xZdmQjyv6hmAzO280g0+n4vGw==}
    dev: false

  /anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1
    dev: true

  /binary-extensions@2.2.0:
    resolution: {integrity: sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==}
    engines: {node: '>=8'}
    dev: true

  /braces@3.0.2:
    resolution: {integrity: sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==}
    engines: {node: '>=8'}
    dependencies:
      fill-range: 7.0.1
    dev: true

  /chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}
    dependencies:
      anymatch: 3.1.3
      braces: 3.0.2
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.3
    dev: true

  /csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  /entities@4.5.0:
    resolution: {integrity: sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==}
    engines: {node: '>=0.12'}

  /esbuild@0.19.12:
    resolution: {integrity: sha512-aARqgq8roFBj054KvQr5f1sFu0D65G+miZRCuJyJ0G13Zwx7vRar5Zhn2tkQNzIXcBrNVsv/8stehpj+GAjgbg==}
    engines: {node: '>=12'}
    hasBin: true
    requiresBuild: true
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.19.12
      '@esbuild/android-arm': 0.19.12
      '@esbuild/android-arm64': 0.19.12
      '@esbuild/android-x64': 0.19.12
      '@esbuild/darwin-arm64': 0.19.12
      '@esbuild/darwin-x64': 0.19.12
      '@esbuild/freebsd-arm64': 0.19.12
      '@esbuild/freebsd-x64': 0.19.12
      '@esbuild/linux-arm': 0.19.12
      '@esbuild/linux-arm64': 0.19.12
      '@esbuild/linux-ia32': 0.19.12
      '@esbuild/linux-loong64': 0.19.12
      '@esbuild/linux-mips64el': 0.19.12
      '@esbuild/linux-ppc64': 0.19.12
      '@esbuild/linux-riscv64': 0.19.12
      '@esbuild/linux-s390x': 0.19.12
      '@esbuild/linux-x64': 0.19.12
      '@esbuild/netbsd-x64': 0.19.12
      '@esbuild/openbsd-x64': 0.19.12
      '@esbuild/sunos-x64': 0.19.12
      '@esbuild/win32-arm64': 0.19.12
      '@esbuild/win32-ia32': 0.19.12
      '@esbuild/win32-x64': 0.19.12
    dev: true

  /estree-walker@2.0.2:
    resolution: {integrity: sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==}

  /fill-range@7.0.1:
    resolution: {integrity: sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==}
    engines: {node: '>=8'}
    dependencies:
      to-regex-range: 5.0.1
    dev: true

  /fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}
    dependencies:
      is-glob: 4.0.3
    dev: true

  /immutable@4.3.5:
    resolution: {integrity: sha512-8eabxkth9gZatlwl5TBuJnCsoTADlL6ftEr7A4qgdaTsPyreilDSnUk57SO+jfKcNtxPa22U5KK6DSeAYhpBJw==}
    dev: true

  /is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}
    dependencies:
      binary-extensions: 2.2.0
    dev: true

  /is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}
    dev: true

  /is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}
    dependencies:
      is-extglob: 2.1.1
    dev: true

  /is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}
    dev: true

  /magic-string@0.30.8:
    resolution: {integrity: sha512-ISQTe55T2ao7XtlAStud6qwYPZjE4GK1S/BeVPus4jrq6JuOnQ00YKQC581RWhR122W7msZV263KzVeLoqidyQ==}
    engines: {node: '>=12'}
    dependencies:
      '@jridgewell/sourcemap-codec': 1.4.15

  /nanoid@3.3.7:
    resolution: {integrity: sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  /normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}
    dev: true

  /picocolors@1.0.0:
    resolution: {integrity: sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==}

  /picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}
    dev: true

  /postcss@8.4.35:
    resolution: {integrity: sha512-u5U8qYpBCpN13BsiEB0CbR1Hhh4Gc0zLFuedrHJKMctHCHAGrMdG0PRM/KErzAL3CU6/eckEtmHNB3x6e3c0vA==}
    engines: {node: ^10 || ^12 || >=14}
    dependencies:
      nanoid: 3.3.7
      picocolors: 1.0.0
      source-map-js: 1.0.2

  /readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}
    dependencies:
      picomatch: 2.3.1
    dev: true

  /resize-observer-polyfill@1.5.1:
    resolution: {integrity: sha512-LwZrotdHOo12nQuZlHEmtuXdqGoOD0OhaxopaNFxWzInpEgaLWoVuAMbTzixuosCx2nEG58ngzW3vxdWoxIgdg==}
    dev: false

  /rollup@4.13.0:
    resolution: {integrity: sha512-3YegKemjoQnYKmsBlOHfMLVPPA5xLkQ8MHLLSw/fBrFaVkEayL51DilPpNNLq1exr98F2B1TzrV0FUlN3gWRPg==}
    engines: {node: '>=18.0.0', npm: '>=8.0.0'}
    hasBin: true
    dependencies:
      '@types/estree': 1.0.5
    optionalDependencies:
      '@rollup/rollup-android-arm-eabi': 4.13.0
      '@rollup/rollup-android-arm64': 4.13.0
      '@rollup/rollup-darwin-arm64': 4.13.0
      '@rollup/rollup-darwin-x64': 4.13.0
      '@rollup/rollup-linux-arm-gnueabihf': 4.13.0
      '@rollup/rollup-linux-arm64-gnu': 4.13.0
      '@rollup/rollup-linux-arm64-musl': 4.13.0
      '@rollup/rollup-linux-riscv64-gnu': 4.13.0
      '@rollup/rollup-linux-x64-gnu': 4.13.0
      '@rollup/rollup-linux-x64-musl': 4.13.0
      '@rollup/rollup-win32-arm64-msvc': 4.13.0
      '@rollup/rollup-win32-ia32-msvc': 4.13.0
      '@rollup/rollup-win32-x64-msvc': 4.13.0
      fsevents: 2.3.3
    dev: true

  /sass@1.71.1:
    resolution: {integrity: sha512-wovtnV2PxzteLlfNzbgm1tFXPLoZILYAMJtvoXXkD7/+1uP41eKkIt1ypWq5/q2uT94qHjXehEYfmjKOvjL9sg==}
    engines: {node: '>=14.0.0'}
    hasBin: true
    dependencies:
      chokidar: 3.6.0
      immutable: 4.3.5
      source-map-js: 1.0.2
    dev: true

  /source-map-js@1.0.2:
    resolution: {integrity: sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==}
    engines: {node: '>=0.10.0'}

  /to-fast-properties@2.0.0:
    resolution: {integrity: sha512-/OaKK0xYrs3DmxRYqL/yDc+FxFUVYhDlXMhRmv3z915w2HF1tnN1omB354j8VUGO/hbRzyD6Y3sA7v7GS/ceog==}
    engines: {node: '>=4'}

  /to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}
    dependencies:
      is-number: 7.0.0
    dev: true

  /vite@5.1.6(sass@1.71.1):
    resolution: {integrity: sha512-yYIAZs9nVfRJ/AiOLCA91zzhjsHUgMjB+EigzFb6W2XTLO8JixBCKCjvhKZaye+NKYHCrkv3Oh50dH9EdLU2RA==}
    engines: {node: ^18.0.0 || >=20.0.0}
    hasBin: true
    peerDependencies:
      '@types/node': ^18.0.0 || >=20.0.0
      less: '*'
      lightningcss: ^1.21.0
      sass: '*'
      stylus: '*'
      sugarss: '*'
      terser: ^5.4.0
    peerDependenciesMeta:
      '@types/node':
        optional: true
      less:
        optional: true
      lightningcss:
        optional: true
      sass:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true
    dependencies:
      esbuild: 0.19.12
      postcss: 8.4.35
      rollup: 4.13.0
      sass: 1.71.1
    optionalDependencies:
      fsevents: 2.3.3
    dev: true

  /vue3-ace-editor@2.2.4(ace-builds@1.32.7)(vue@3.4.21):
    resolution: {integrity: sha512-FZkEyfpbH068BwjhMyNROxfEI8135Sc+x8ouxkMdCNkuj/Tuw83VP/gStFQqZHqljyX9/VfMTCdTqtOnJZGN8g==}
    peerDependencies:
      ace-builds: '*'
      vue: ^3
    dependencies:
      ace-builds: 1.32.7
      resize-observer-polyfill: 1.5.1
      vue: 3.4.21
    dev: false

  /vue@3.4.21:
    resolution: {integrity: sha512-5hjyV/jLEIKD/jYl4cavMcnzKwjMKohureP8ejn3hhEjwhWIhWeuzL2kJAjzl/WyVsgPY56Sy4Z40C3lVshxXA==}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@vue/compiler-dom': 3.4.21
      '@vue/compiler-sfc': 3.4.21
      '@vue/runtime-dom': 3.4.21
      '@vue/server-renderer': 3.4.21(vue@3.4.21)
      '@vue/shared': 3.4.21
`;export{n as default};
