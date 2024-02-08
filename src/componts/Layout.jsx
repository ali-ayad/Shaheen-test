import React from 'react';
import logo from '../assets/Group 28.png'
import logom from '../assets/Group 28 (1).png'
import Sidelist from './MyDrawer';
import { Layout } from 'antd';
import Responsive from 'react-responsive';
import Features from './Features';
import CompnySec from './CompnySec';
import Footer from '../componts/Footer';
import { Link } from 'react-scroll'
import Home from './Home';
import WhoWeAre from './WhoWeAre';
import ContactUs from './Contact';

const XXL = props => <Responsive {...props} minWidth={1601} />;
const XL = props => <Responsive {...props} minWidth={1200} maxWidth={1600} />;
const Desktop = props => <Responsive {...props} minWidth={700} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={700} />;
const Default = props => <Responsive {...props} minWidth={276} maxWidth={1000} />;

export {
  XXL,
  XL,
  Desktop,
  Tablet,
  Mobile,
  Default
};

const { Header, Content } = Layout;

const Main = () => (

  <Layout className='w-full relative'>

    <Desktop>
      <Header className='fixed w-full h-[80px] bg-[#383838] flex justify-between z-10 ' >

        <div>
          <img src={logo} alt="" />
        </div>
        <ul className='flex list-none ml-24  gap-4  py-2'>
          <li > <Link to='home' spy={true} smooth={true} offset={-44} duration={500} activeClass='bg-white text-[#888888]' className='text-[#888888]  w-auto h-auto px-2 p-2   cursor-pointer rounded  hover:text-[#888888]' > الرئيسية </Link> </li>
          <li > <Link to='WhoWeAre' spy={true} smooth={true} offset={-70} duration={500} activeClass='bg-white text-[#888888]' className='text-[#888888]  w-auto h-auto px-2 p-2   cursor-pointer rounded  hover:text-[#888888]' > من نحن</Link> </li>
          <li > <Link to='compnysec' spy={true} smooth={true} offset={-50} duration={500} activeClass='bg-white text-[#888888]' className='text-[#888888]  w-auto h-auto px-2 p-2   cursor-pointer rounded  hover:text-[#888888]' >  الخدمات</Link> </li>
          <li > <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} activeClass='bg-white text-[#888888]' className='text-[#888888]  w-auto h-auto px-2 p-2   cursor-pointer rounded  hover:text-[#888888]' > تواصل معنا </Link> </li>
        </ul>

        <div>

        </div>

      </Header>
    </Desktop>

    <Mobile>
      <Header className='fixed w-full h-[52px] bg-[#383838] flex justify-between items-center mx-auto px-10  z-50  ' >

        <div className='my-auto'>
          <Sidelist></Sidelist>
        </div>

        <div className='my-auto'>
          <img className='my-1' src={logom} alt="" />
        </div>


      </Header>
    </Mobile>

    <Content className='mt-10 md:mt-[80px]' >

      <Home></Home>

      <Features></Features>
      <WhoWeAre></WhoWeAre>
      <CompnySec></CompnySec>
      <ContactUs></ContactUs>
      <Footer></Footer>

    </Content>

  </Layout>
)

export default Main;