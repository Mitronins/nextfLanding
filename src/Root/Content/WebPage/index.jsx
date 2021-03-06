import Welcome from './Welcome';
import Advantages from './Advantages';
import WhatWeCan from './WhatWeCan';
import MobileSite from './MobileSite';
import OurWork from '../MainPage/OurWork';
import Portfolio from '../../../components/Portfolio/index';
import OurClients from '../../../components/OurClients';
import OrderBottom from '../../../components/OrderBottom';

export default class extends React.Component {


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Welcome/>
                <Advantages/>
                <WhatWeCan/>
                <MobileSite/>
                <OurWork/>
                <Portfolio page={'web'}/>
                <OurClients/>
                <OrderBottom/>
            </div>
        )
    }
};