import React from 'react'
import { Search } from 'lucide-react'
import sflixLogo from '../../images/sflix-icon.png'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function HeroSection() {
    return (
        <div className='relative w-screen h-auto px-3'>
            <div className='max-w-[1190px] mx-auto py-[2.57rem] space-y-6'>
                <div className='w-fit mx-auto space-y-5 select-none'>
                    <img src={sflixLogo} alt='Hero Section Logo' className='size-[75px]' />
                    <h1 className='text-white text-3xl font-montserrat font-bold text-center'>SFlix</h1>
                </div>
                <div className='w-full h-auto space-y-8 select-none'>
                    <div className='flex justify-between items-center'>
                        <Input text={'text'} id={'searchBar'} name={'searchBar'} placeholder={'Enter a title of the movie...'} />
                        <div className='w-fit bg-[#05ACC1] py-3 px-5 rounded-r-lg cursor-pointer'>
                            <Search className='text-white' />
                        </div>
                    </div>
                    <Button to={'/home'} text={'View Full Site'} />
                </div>
                <div>
                    <h1 className='text-white text-lg font-montserrat font-medium'>Watch Movies Online Free</h1>
                    <p className='text-white text-justify font-montserrat'>SFlix is one of the best free sites to watch movies online for free in 2021. With no registration or payment required, you can binge-watch tens of thousands of movies and TV shows in HD quality seamlessly and safely. New titles are updated on the site daily to make sure fun never ends on SFlix. Should you not find your movie of interest, simply make a request and we will scour the Internet to provide you the content you have been longing for.
                        <br />
                        <br />
                        SFlix is where you can get exclusive premium features at the cost of nothing. We provide HD quality, superb streaming capabilities, safe and private source links, and the ad-free feature completely for free!
                    </p>
                    <br />
                    <br />
                    <h1 className='text-white text-lg font-montserrat font-medium'>
                        What is SFlix?</h1>
                    <p className='text-white text-justify font-montserrat'>SFlix is a newly-created site that allows users to watch and download movies and TV shows online in HD quality for free. SFlix’s purpose is to become a free alternative to Netflix so movie enthusiasts can enjoy all the features that the giant streaming service offers without having to pay a dime. SFlix is created in order for movie fans to watch movies safely and seamlessly no matter what their financial situation is. We might have a long way to go to reach our goal, but we believe, with your support, it can be achieved soon.</p>
                    <br />
                    <br />
                    <h1 className='text-white text-lg font-montserrat font-medium'>Is SFlix or 123Movies Better for streaming movies and shows?</h1>
                    <p className='text-white text-justify font-montserrat'>123Movies is no doubt the most popular free movie site ever. At peak, 123movies welcomed 98 millions of users a month. To many movie fans, whenever they think of free movie streaming, the domain 123movies.to pops up. Unfortunately, the site was shut down in 2018 and since then, we haven’t heard any official news about a comeback from the team. In fact, multiple sites have been created to copy 123movies and they might be ill-intentioned. Visiting such sites might cause you troubles because they are all filled with malicious ads. For your complete security, you should stay with SFlix instead. Hackers have no chances to access your device or gain your private information on SFlix as we are free from ads and do not require any registration.</p>
                    <br />
                    <br />
                    <h1 className='text-white text-lg font-montserrat font-medium'>Is It Illegal to Use SFlix?</h1>
                    <p className='text-white text-justify font-montserrat'>We are currently accessible all over the world. SFlix is not technically a legal site, however, using SFlix for free online movie streaming is not illegal. According to copyright attorneys, you will only be convicted for a jail term or subject to criminal or civil charges when you share or download pirated content. If you insist on downloading videos to watch offline later, use a reliable VPN and proceed at your own risk.</p>
                </div>
            </div>
        </div>
    )
}
