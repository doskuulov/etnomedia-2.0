import React from 'react'
import { FiPhoneCall, FiMapPin, FiMail } from 'react-icons/fi'
import Head from '../Components/Head'
import Layout from '../layout/Layout'

function ContactUs() {
	const ContactData = [
		{
			id: 1,
			title: 'Бизге электрондук почта',
			info: 'Кросс-платформа моделдери үчүн бэкенд идеяларын интерактивдүү түрдө өстүрүңүз.',
			icon: FiMail,
			contact: 'etnomedia2020@gmail.com',
		},
		{
			id: 2,
			title: 'Бизге чал',
			info: 'Интуитивдик өткөрүү жөндөмдүүлүгү үчүн оптималдуу тегиздөөлөрдү өзгөчө колдонуңуз.',
			icon: FiPhoneCall,
			contact: '+996 706 862 004',
		},
		{
			id: 3,
			title: 'Жайгашкан жер',
			info: 'Бишкек, Чуй 196/2',
			icon: FiMapPin,
			contact: '',
		},
	]
	return (
		<Layout>
			<div className='min-height-screen container mx-auto px-2 my-6'>
				<Head title='Contact Us' />
				<div className='grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8'>
					{ContactData.map(item => (
						<div
							key={item.id}
							className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'
						>
							<span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
								<item.icon />
							</span>
							<h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
							<p className='mb-0 text-sm text-text leading-7'>
								<a href={`mailto:${item.contact}`} className='text-blue-600'>
									{item.contact}
								</a>{' '}
								{item.info}
							</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	)
}

export default ContactUs
