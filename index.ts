import xs, { Stream } from 'xstream'

type CompoundType = FirstComponentType | SecondComponentType

type FirstComponentType = {
	kind: 'first'
}

type SecondComponentType = {
	kind: 'second'
}

const first$: Stream<FirstComponentType> = xs.of({ kind: 'first' })

const second$: Stream<SecondComponentType> = xs.of({ kind: 'second' })

const compound$: Stream<CompoundType> = xs.merge(first$)