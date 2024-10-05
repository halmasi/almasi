"use client";

import { onSubmit } from "@/lib/submitHandler";

export default function ContactForm() {
	return (
		<form
			className='flex flex-col space-y-2 w-full items-start border p-3 rounded-2xl'
			action={onSubmit}
		>
			<div className='flex flex-col md:flex-row w-full'>
				<label htmlFor='name' className='w-fit pr-3'>
					Name:
				</label>
				<input
					className='px-4 h-auto w-full bg-white rounded-full border transition-all duration-200 hover:border-red-700 shadow-md focus:shadow-lg focus:outline-none focus:ring-2 ring-red-900'
					type='text'
					id='name'
					name='name'
					required
					placeholder='Name'
				/>
			</div>
			<div className='flex flex-col md:flex-row w-full'>
				<label htmlFor='email' className='w-full  md:w-fit pr-3'>
					Email:
				</label>
				<input
					className='px-4 h-auto w-full bg-white rounded-full border transition-all duration-200 hover:border-red-700 shadow-md focus:shadow-lg focus:outline-none focus:ring-2 ring-red-900'
					type='email'
					id='email'
					name='email'
					required
					placeholder='Email'
				/>
			</div>
			<label htmlFor='message' className='w-full pr-3'>
				Massage:
			</label>
			<textarea
				className='px-4 h-[25svh] w-full bg-white rounded-md border transition-all duration-200 hover:border-red-700 shadow-md focus:shadow-lg focus:outline-none focus:ring-2 ring-red-900'
				name='message'
				id='message'
				required
				placeholder='Message'
			/>
			<button
				type='submit'
				name='submit'
				className='bg-green-700 text-white rounded-lg py-2 px-5 hover:bg-green-800 self-center'
			>
				Submit
			</button>
		</form>
	);
}
