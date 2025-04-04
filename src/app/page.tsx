import { CountDown } from '@/components/countdown';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Tasks } from '@/components/tasks';
import { Separator } from '@/components/ui/separator';

export default function Home() {
	return (
		<div className='mx-auto max-w-[90%]'>
			<Header />
			<Separator />
			<main>
				<CountDown />
				<Tasks />
			</main>
			<Separator />
			<Footer />
		</div>
	);
}
