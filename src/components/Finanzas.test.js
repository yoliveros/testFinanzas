import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Finanzas from './Finanzas'

configure({ adapter: new Adapter() })

describe('Finanzas', () => {
	test('llama a eliminar finanzas onClick ', () => {
		const finanzas = [
			{ desc: 'Finanza 1', cant: 100 },
			{ desc: 'Finanza 2', cant: 80 }
		]

		const eliminarFinanzas = jest.fn()
		const wrapper = shallow(
			<Finanzas
				finanzas={finanzas}
				eliminarFinanza={eliminarFinanzas}
			/>
		)

		wrapper
			.find('button')
			.at(0)
			.simulate('click')

		expect(eliminarFinanzas.mock.calls).toEqual([[0]])

		const resultado1 = wrapper.text().includes('Finanza 1')
		const resultado2 = wrapper.text().includes('Finanza 2')

		expect(resultado1).toEqual(true)
		expect(resultado2).toEqual(true)
	})
})
