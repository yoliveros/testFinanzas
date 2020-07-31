import React from "react"
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Form from "./Form"


configure({ adapter: new Adapter() })

describe('Form', () => {
	test('agrega finanza', () => {
		const agregarFinanzas = jest.fn()
		const prevent = jest.fn()
		const wrapper = shallow(<Form agregarFinanza={agregarFinanzas} />)
		wrapper.find('input')
			.at(0)
			.simulate('change', { target: { value: 'description' } })
		wrapper.find('input')
			.at(1)
			.simulate('change', { target: { value: '125' } })

		wrapper.find('form')
			.simulate('submit', { preventDefault: prevent })

		expect(agregarFinanzas.mock.calls).toEqual([
			[{ desc: 'description', cant: 125 }]
		])

		expect(prevent.mock.calls).toEqual([[]])
	})
})