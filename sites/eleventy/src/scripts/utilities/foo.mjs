/**
 * 'Foo' module
 */

export default function () {
  // Grouping the console logging
  console.group('Foo Group')

  const helloFoo = () => {
    console.log('Hello from Foo.')
  }

  console.groupEnd()

  return helloFoo()
}
