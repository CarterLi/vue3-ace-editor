const n=`lockfileVersion: 5.4

specifiers:
  '@vitejs/plugin-vue': ^3.1.2
  ace-builds: ^1.12.1
  sass: ^1.55.0
  vite: ^3.1.8
  vue: ^3.2.41
  vue3-ace-editor: ^2.2.2

dependencies:
  ace-builds: 1.12.1
  vue: 3.2.41
  vue3-ace-editor: 2.2.2

devDependencies:
  '@vitejs/plugin-vue': 3.1.2_vite@3.1.8+vue@3.2.41
  sass: 1.55.0
  vite: 3.1.8_sass@1.55.0

packages:

  /@babel/helper-string-parser/7.19.4:
    resolution: {integrity: sha512-nHtDoQcuqFmwYNYPz3Rah5ph2p8PFeFCsZk9A/48dPc/rGocJ5J3hAAZ7pb76VWX3fZKu+uEr/FhH5jLx7umrw==}
    engines: {node: '>=6.9.0'}

  /@babel/helper-validator-identifier/7.19.1:
    resolution: {integrity: sha512-awrNfaMtnHUr653GgGEs++LlAvW6w+DcPrOliSMXWCKo597CwL5Acf/wWdNkf/tfEQE3mjkeD1YOVZOUV/od1w==}
    engines: {node: '>=6.9.0'}

  /@babel/parser/7.19.4:
    resolution: {integrity: sha512-qpVT7gtuOLjWeDTKLkJ6sryqLliBaFpAtGeqw5cs5giLldvh+Ch0plqnUMKoVAUS6ZEueQQiZV+p5pxtPitEsA==}
    engines: {node: '>=6.0.0'}
    hasBin: true
    dependencies:
      '@babel/types': 7.19.4

  /@babel/types/7.19.4:
    resolution: {integrity: sha512-M5LK7nAeS6+9j7hAq+b3fQs+pNfUtTGq+yFFfHnauFA8zQtLRfmuipmsKDKKLuyG+wC8ABW43A153YNawNTEtw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-string-parser': 7.19.4
      '@babel/helper-validator-identifier': 7.19.1
      to-fast-properties: 2.0.0

  /@esbuild/android-arm/0.15.11:
    resolution: {integrity: sha512-PzMcQLazLBkwDEkrNPi9AbjFt6+3I7HKbiYF2XtWQ7wItrHvEOeO3T8Am434zAozWtVP7lrTue1bEfc2nYWeCA==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-loong64/0.15.11:
    resolution: {integrity: sha512-geWp637tUhNmhL3Xgy4Bj703yXB9dqiLJe05lCUfjSFDrQf9C/8pArusyPUbUbPwlC/EAUjBw32sxuIl/11dZw==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@vitejs/plugin-vue/3.1.2_vite@3.1.8+vue@3.2.41:
    resolution: {integrity: sha512-3zxKNlvA3oNaKDYX0NBclgxTQ1xaFdL7PzwF6zj9tGFziKwmBa3Q/6XcJQxudlT81WxDjEhHmevvIC4Orc1LhQ==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      vite: ^3.0.0
      vue: ^3.2.25
    dependencies:
      vite: 3.1.8_sass@1.55.0
      vue: 3.2.41
    dev: true

  /@vue/compiler-core/3.2.41:
    resolution: {integrity: sha512-oA4mH6SA78DT+96/nsi4p9DX97PHcNROxs51lYk7gb9Z4BPKQ3Mh+BLn6CQZBw857Iuhu28BfMSRHAlPvD4vlw==}
    dependencies:
      '@babel/parser': 7.19.4
      '@vue/shared': 3.2.41
      estree-walker: 2.0.2
      source-map: 0.6.1

  /@vue/compiler-dom/3.2.41:
    resolution: {integrity: sha512-xe5TbbIsonjENxJsYRbDJvthzqxLNk+tb3d/c47zgREDa/PCp6/Y4gC/skM4H6PIuX5DAxm7fFJdbjjUH2QTMw==}
    dependencies:
      '@vue/compiler-core': 3.2.41
      '@vue/shared': 3.2.41

  /@vue/compiler-sfc/3.2.41:
    resolution: {integrity: sha512-+1P2m5kxOeaxVmJNXnBskAn3BenbTmbxBxWOtBq3mQTCokIreuMULFantBUclP0+KnzNCMOvcnKinqQZmiOF8w==}
    dependencies:
      '@babel/parser': 7.19.4
      '@vue/compiler-core': 3.2.41
      '@vue/compiler-dom': 3.2.41
      '@vue/compiler-ssr': 3.2.41
      '@vue/reactivity-transform': 3.2.41
      '@vue/shared': 3.2.41
      estree-walker: 2.0.2
      magic-string: 0.25.9
      postcss: 8.4.18
      source-map: 0.6.1

  /@vue/compiler-ssr/3.2.41:
    resolution: {integrity: sha512-Y5wPiNIiaMz/sps8+DmhaKfDm1xgj6GrH99z4gq2LQenfVQcYXmHIOBcs5qPwl7jaW3SUQWjkAPKMfQemEQZwQ==}
    dependencies:
      '@vue/compiler-dom': 3.2.41
      '@vue/shared': 3.2.41

  /@vue/reactivity-transform/3.2.41:
    resolution: {integrity: sha512-mK5+BNMsL4hHi+IR3Ft/ho6Za+L3FA5j8WvreJ7XzHrqkPq8jtF/SMo7tuc9gHjLDwKZX1nP1JQOKo9IEAn54A==}
    dependencies:
      '@babel/parser': 7.19.4
      '@vue/compiler-core': 3.2.41
      '@vue/shared': 3.2.41
      estree-walker: 2.0.2
      magic-string: 0.25.9

  /@vue/reactivity/3.2.41:
    resolution: {integrity: sha512-9JvCnlj8uc5xRiQGZ28MKGjuCoPhhTwcoAdv3o31+cfGgonwdPNuvqAXLhlzu4zwqavFEG5tvaoINQEfxz+l6g==}
    dependencies:
      '@vue/shared': 3.2.41

  /@vue/runtime-core/3.2.41:
    resolution: {integrity: sha512-0LBBRwqnI0p4FgIkO9q2aJBBTKDSjzhnxrxHYengkAF6dMOjeAIZFDADAlcf2h3GDALWnblbeprYYpItiulSVQ==}
    dependencies:
      '@vue/reactivity': 3.2.41
      '@vue/shared': 3.2.41

  /@vue/runtime-dom/3.2.41:
    resolution: {integrity: sha512-U7zYuR1NVIP8BL6jmOqmapRAHovEFp7CSw4pR2FacqewXNGqZaRfHoNLQsqQvVQ8yuZNZtxSZy0FFyC70YXPpA==}
    dependencies:
      '@vue/runtime-core': 3.2.41
      '@vue/shared': 3.2.41
      csstype: 2.6.21

  /@vue/server-renderer/3.2.41_vue@3.2.41:
    resolution: {integrity: sha512-7YHLkfJdTlsZTV0ae5sPwl9Gn/EGr2hrlbcS/8naXm2CDpnKUwC68i1wGlrYAfIgYWL7vUZwk2GkYLQH5CvFig==}
    peerDependencies:
      vue: 3.2.41
    dependencies:
      '@vue/compiler-ssr': 3.2.41
      '@vue/shared': 3.2.41
      vue: 3.2.41

  /@vue/shared/3.2.41:
    resolution: {integrity: sha512-W9mfWLHmJhkfAmV+7gDjcHeAWALQtgGT3JErxULl0oz6R6+3ug91I7IErs93eCFhPCZPHBs4QJS7YWEV7A3sxw==}

  /ace-builds/1.12.1:
    resolution: {integrity: sha512-irh8sJ9Hp2AkeCunX00BEWdGVoz3Rclp6RRMGbhRnFWv8tfalgTEEiBOuua0S/OIUwu7NHaPtPkXs7jgz/S3tA==}
    dev: false

  /anymatch/3.1.2:
    resolution: {integrity: sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==}
    engines: {node: '>= 8'}
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1
    dev: true

  /binary-extensions/2.2.0:
    resolution: {integrity: sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==}
    engines: {node: '>=8'}
    dev: true

  /braces/3.0.2:
    resolution: {integrity: sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==}
    engines: {node: '>=8'}
    dependencies:
      fill-range: 7.0.1
    dev: true

  /chokidar/3.5.3:
    resolution: {integrity: sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==}
    engines: {node: '>= 8.10.0'}
    dependencies:
      anymatch: 3.1.2
      braces: 3.0.2
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.2
    dev: true

  /csstype/2.6.21:
    resolution: {integrity: sha512-Z1PhmomIfypOpoMjRQB70jfvy/wxT50qW08YXO5lMIJkrdq4yOTR+AW7FqutScmB9NkLwxo+jU+kZLbofZZq/w==}

  /esbuild-android-64/0.15.11:
    resolution: {integrity: sha512-rrwoXEiuI1kaw4k475NJpexs8GfJqQUKcD08VR8sKHmuW9RUuTR2VxcupVvHdiGh9ihxL9m3lpqB1kju92Ialw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-android-arm64/0.15.11:
    resolution: {integrity: sha512-/hDubOg7BHOhUUsT8KUIU7GfZm5bihqssvqK5PfO4apag7YuObZRZSzViyEKcFn2tPeHx7RKbSBXvAopSHDZJQ==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-darwin-64/0.15.11:
    resolution: {integrity: sha512-1DqHD0ms3AhiwkKnjRUzmiW7JnaJJr5FKrPiR7xuyMwnjDqvNWDdMq4rKSD9OC0piFNK6n0LghsglNMe2MwJtA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-darwin-arm64/0.15.11:
    resolution: {integrity: sha512-OMzhxSbS0lwwrW40HHjRCeVIJTURdXFA8c3GU30MlHKuPCcvWNUIKVucVBtNpJySXmbkQMDJdJNrXzNDyvoqvQ==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-freebsd-64/0.15.11:
    resolution: {integrity: sha512-8dKP26r0/Qyez8nTCwpq60QbuYKOeBygdgOAWGCRalunyeqWRoSZj9TQjPDnTTI9joxd3QYw3UhVZTKxO9QdRg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-freebsd-arm64/0.15.11:
    resolution: {integrity: sha512-aSGiODiukLGGnSg/O9+cGO2QxEacrdCtCawehkWYTt5VX1ni2b9KoxpHCT9h9Y6wGqNHmXFnB47RRJ8BIqZgmQ==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-32/0.15.11:
    resolution: {integrity: sha512-lsrAfdyJBGx+6aHIQmgqUonEzKYeBnyfJPkT6N2dOf1RoXYYV1BkWB6G02tjsrz1d5wZzaTc3cF+TKmuTo/ZwA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-64/0.15.11:
    resolution: {integrity: sha512-Y2Rh+PcyVhQqXKBTacPCltINN3uIw2xC+dsvLANJ1SpK5NJUtxv8+rqWpjmBgaNWKQT1/uGpMmA9olALy9PLVA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-arm/0.15.11:
    resolution: {integrity: sha512-TJllTVk5aSyqPFvvcHTvf6Wu1ZKhWpJ/qNmZO8LL/XeB+LXCclm7HQHNEIz6MT7IX8PmlC1BZYrOiw2sXSB95A==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-arm64/0.15.11:
    resolution: {integrity: sha512-uhcXiTwTmD4OpxJu3xC5TzAAw6Wzf9O1XGWL448EE9bqGjgV1j+oK3lIHAfsHnuIn8K4nDW8yjX0Sv5S++oRuw==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-mips64le/0.15.11:
    resolution: {integrity: sha512-WD61y/R1M4BLe4gxXRypoQ0Ci+Vjf714QYzcPNkiYv5I8K8WDz2ZR8Bm6cqKxd6rD+e/rZgPDbhQ9PCf7TMHmA==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-ppc64le/0.15.11:
    resolution: {integrity: sha512-JVleZS9oPVLTlBhPTWgOwxFWU/wMUdlBwTbGA4GF8c38sLbS13cupj+C8bLq929jU7EMWry4SaL+tKGIaTlqKg==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-riscv64/0.15.11:
    resolution: {integrity: sha512-9aLIalZ2HFHIOZpmVU11sEAS9F8TnHw49daEjcgMpBXHFF57VuT9f9/9LKJhw781Gda0P9jDkuCWJ0tFbErvJw==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-s390x/0.15.11:
    resolution: {integrity: sha512-sZHtiXXOKsLI3XGBGoYO4qKBzJlb8xNsWmvFiwFMHFzA4AXgDP1KDp7Dawe9C2pavTRBDvl+Ok4n/DHQ59oaTg==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-netbsd-64/0.15.11:
    resolution: {integrity: sha512-hUC9yN06K9sg7ju4Vgu9ChAPdsEgtcrcLfyNT5IKwKyfpLvKUwCMZSdF+gRD3WpyZelgTQfJ+pDx5XFbXTlB0A==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-openbsd-64/0.15.11:
    resolution: {integrity: sha512-0bBo9SQR4t66Wd91LGMAqmWorzO0TTzVjYiifwoFtel8luFeXuPThQnEm5ztN4g0fnvcp7AnUPPzS/Depf17wQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-sunos-64/0.15.11:
    resolution: {integrity: sha512-EuBdTGlsMTjEl1sQnBX2jfygy7iR6CKfvOzi+gEOfhDqbHXsmY1dcpbVtcwHAg9/2yUZSfMJHMAgf1z8M4yyyw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-windows-32/0.15.11:
    resolution: {integrity: sha512-O0/Wo1Wk6dc0rZSxkvGpmTNIycEznHmkObTFz2VHBhjPsO4ZpCgfGxNkCpz4AdAIeMczpTXt/8d5vdJNKEGC+Q==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-windows-64/0.15.11:
    resolution: {integrity: sha512-x977Q4HhNjnHx00b4XLAnTtj5vfbdEvkxaQwC1Zh5AN8g5EX+izgZ6e5QgqJgpzyRNJqh4hkgIJF1pyy1be0mQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-windows-arm64/0.15.11:
    resolution: {integrity: sha512-VwUHFACuBahrvntdcMKZteUZ9HaYrBRODoKe4tIWxguQRvvYoYb7iu5LrcRS/FQx8KPZNaa72zuqwVtHeXsITw==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild/0.15.11:
    resolution: {integrity: sha512-OgHGuhlfZ//mToxjte1D5iiiQgWfJ2GByVMwEC/IuoXsBGkuyK1+KrjYu0laSpnN/L1UmLUCv0s25vObdc1bVg==}
    engines: {node: '>=12'}
    hasBin: true
    requiresBuild: true
    optionalDependencies:
      '@esbuild/android-arm': 0.15.11
      '@esbuild/linux-loong64': 0.15.11
      esbuild-android-64: 0.15.11
      esbuild-android-arm64: 0.15.11
      esbuild-darwin-64: 0.15.11
      esbuild-darwin-arm64: 0.15.11
      esbuild-freebsd-64: 0.15.11
      esbuild-freebsd-arm64: 0.15.11
      esbuild-linux-32: 0.15.11
      esbuild-linux-64: 0.15.11
      esbuild-linux-arm: 0.15.11
      esbuild-linux-arm64: 0.15.11
      esbuild-linux-mips64le: 0.15.11
      esbuild-linux-ppc64le: 0.15.11
      esbuild-linux-riscv64: 0.15.11
      esbuild-linux-s390x: 0.15.11
      esbuild-netbsd-64: 0.15.11
      esbuild-openbsd-64: 0.15.11
      esbuild-sunos-64: 0.15.11
      esbuild-windows-32: 0.15.11
      esbuild-windows-64: 0.15.11
      esbuild-windows-arm64: 0.15.11
    dev: true

  /estree-walker/2.0.2:
    resolution: {integrity: sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==}

  /fill-range/7.0.1:
    resolution: {integrity: sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==}
    engines: {node: '>=8'}
    dependencies:
      to-regex-range: 5.0.1
    dev: true

  /fsevents/2.3.2:
    resolution: {integrity: sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /function-bind/1.1.1:
    resolution: {integrity: sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==}
    dev: true

  /glob-parent/5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}
    dependencies:
      is-glob: 4.0.3
    dev: true

  /has/1.0.3:
    resolution: {integrity: sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==}
    engines: {node: '>= 0.4.0'}
    dependencies:
      function-bind: 1.1.1
    dev: true

  /immutable/4.1.0:
    resolution: {integrity: sha512-oNkuqVTA8jqG1Q6c+UglTOD1xhC1BtjKI7XkCXRkZHrN5m18/XsnUp8Q89GkQO/z+0WjonSvl0FLhDYftp46nQ==}
    dev: true

  /is-binary-path/2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}
    dependencies:
      binary-extensions: 2.2.0
    dev: true

  /is-core-module/2.10.0:
    resolution: {integrity: sha512-Erxj2n/LDAZ7H8WNJXd9tw38GYM3dv8rk8Zcs+jJuxYTW7sozH+SS8NtrSjVL1/vpLvWi1hxy96IzjJ3EHTJJg==}
    dependencies:
      has: 1.0.3
    dev: true

  /is-extglob/2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}
    dev: true

  /is-glob/4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}
    dependencies:
      is-extglob: 2.1.1
    dev: true

  /is-number/7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}
    dev: true

  /magic-string/0.25.9:
    resolution: {integrity: sha512-RmF0AsMzgt25qzqqLc1+MbHmhdx0ojF2Fvs4XnOqz2ZOBXzzkEwc/dJQZCYHAn7v1jbVOjAZfK8msRn4BxO4VQ==}
    dependencies:
      sourcemap-codec: 1.4.8

  /nanoid/3.3.4:
    resolution: {integrity: sha512-MqBkQh/OHTS2egovRtLk45wEyNXwF+cokD+1YPf9u5VfJiRdAiRwB2froX5Co9Rh20xs4siNPm8naNotSD6RBw==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  /normalize-path/3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}
    dev: true

  /path-parse/1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}
    dev: true

  /picocolors/1.0.0:
    resolution: {integrity: sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==}

  /picomatch/2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}
    dev: true

  /postcss/8.4.18:
    resolution: {integrity: sha512-Wi8mWhncLJm11GATDaQKobXSNEYGUHeQLiQqDFG1qQ5UTDPTEvKw0Xt5NsTpktGTwLps3ByrWsBrG0rB8YQ9oA==}
    engines: {node: ^10 || ^12 || >=14}
    dependencies:
      nanoid: 3.3.4
      picocolors: 1.0.0
      source-map-js: 1.0.2

  /readdirp/3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}
    dependencies:
      picomatch: 2.3.1
    dev: true

  /resize-observer-polyfill/1.5.1:
    resolution: {integrity: sha512-LwZrotdHOo12nQuZlHEmtuXdqGoOD0OhaxopaNFxWzInpEgaLWoVuAMbTzixuosCx2nEG58ngzW3vxdWoxIgdg==}
    dev: false

  /resolve/1.22.1:
    resolution: {integrity: sha512-nBpuuYuY5jFsli/JIs1oldw6fOQCBioohqWZg/2hiaOybXOft4lonv85uDOKXdf8rhyK159cxU5cDcK/NKk8zw==}
    hasBin: true
    dependencies:
      is-core-module: 2.10.0
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0
    dev: true

  /rollup/2.78.1:
    resolution: {integrity: sha512-VeeCgtGi4P+o9hIg+xz4qQpRl6R401LWEXBmxYKOV4zlF82lyhgh2hTZnheFUbANE8l2A41F458iwj2vEYaXJg==}
    engines: {node: '>=10.0.0'}
    hasBin: true
    optionalDependencies:
      fsevents: 2.3.2
    dev: true

  /sass/1.55.0:
    resolution: {integrity: sha512-Pk+PMy7OGLs9WaxZGJMn7S96dvlyVBwwtToX895WmCpAOr5YiJYEUJfiJidMuKb613z2xNWcXCHEuOvjZbqC6A==}
    engines: {node: '>=12.0.0'}
    hasBin: true
    dependencies:
      chokidar: 3.5.3
      immutable: 4.1.0
      source-map-js: 1.0.2
    dev: true

  /source-map-js/1.0.2:
    resolution: {integrity: sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==}
    engines: {node: '>=0.10.0'}

  /source-map/0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  /sourcemap-codec/1.4.8:
    resolution: {integrity: sha512-9NykojV5Uih4lgo5So5dtw+f0JgJX30KCNI8gwhz2J9A15wD0Ml6tjHKwf6fTSa6fAdVBdZeNOs9eJ71qCk8vA==}

  /supports-preserve-symlinks-flag/1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}
    dev: true

  /to-fast-properties/2.0.0:
    resolution: {integrity: sha512-/OaKK0xYrs3DmxRYqL/yDc+FxFUVYhDlXMhRmv3z915w2HF1tnN1omB354j8VUGO/hbRzyD6Y3sA7v7GS/ceog==}
    engines: {node: '>=4'}

  /to-regex-range/5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}
    dependencies:
      is-number: 7.0.0
    dev: true

  /vite/3.1.8_sass@1.55.0:
    resolution: {integrity: sha512-m7jJe3nufUbuOfotkntGFupinL/fmuTNuQmiVE7cH2IZMuf4UbfbGYMUT3jVWgGYuRVLY9j8NnrRqgw5rr5QTg==}
    engines: {node: ^14.18.0 || >=16.0.0}
    hasBin: true
    peerDependencies:
      less: '*'
      sass: '*'
      stylus: '*'
      terser: ^5.4.0
    peerDependenciesMeta:
      less:
        optional: true
      sass:
        optional: true
      stylus:
        optional: true
      terser:
        optional: true
    dependencies:
      esbuild: 0.15.11
      postcss: 8.4.18
      resolve: 1.22.1
      rollup: 2.78.1
      sass: 1.55.0
    optionalDependencies:
      fsevents: 2.3.2
    dev: true

  /vue/3.2.41:
    resolution: {integrity: sha512-uuuvnrDXEeZ9VUPljgHkqB5IaVO8SxhPpqF2eWOukVrBnRBx2THPSGQBnVRt0GrIG1gvCmFXMGbd7FqcT1ixNQ==}
    dependencies:
      '@vue/compiler-dom': 3.2.41
      '@vue/compiler-sfc': 3.2.41
      '@vue/runtime-dom': 3.2.41
      '@vue/server-renderer': 3.2.41_vue@3.2.41
      '@vue/shared': 3.2.41

  /vue3-ace-editor/2.2.2:
    resolution: {integrity: sha512-fZ6OWosbU+odLrtrcGC/536QjCigujYJB0Hf6/tBp+ef/ohTadwQAqyBlVzOmvrmzZyubphpV9zkaZcx5Fuivw==}
    dependencies:
      ace-builds: 1.12.1
      resize-observer-polyfill: 1.5.1
      vue: 3.2.41
    dev: false
`;export{n as default};
