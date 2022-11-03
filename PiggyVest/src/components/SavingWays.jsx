import React from 'react'
import PiggyBank from '../assets/images-piggyvest/piggy.png';
import SafeLock from '../assets/images-piggyvest/safelock.png';
import Target from '../assets/images-piggyvest/target.png';
import FlexNaira from '../assets/images-piggyvest/flex.png';
import '../styles';

const SavingWays = () => {
  return (
    <>
    <div className="savingways-container">
    <div className="savingway-aside1">
    <h3>4 ways to build your savings</h3>
    <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
    <a href="" className='btn-primary'>Start Saving</a>
    </div>
      
<div className="savingway-aside2">

<div className="aside-savingways">
<div className="aside-savingways-image">
<img src={PiggyBank} alt="image/automate" className='aside-logo' />
</div>
<div className="aside-savingways-text">
<h5>Automated Savings</h5>
<p> Build a dedicated savings faster on your terms automatically or manually.</p>
<div className="sub-content">
<a href=''>Piggybank</a>
</div>
</div>
</div>

<div className="aside-savingways">
<div className="aside-savingways-image">
<img src={SafeLock} alt="image/fixed" className='aside-logo' />
</div>
<div className="aside-savingways-text">
<h5>Fixed Savings</h5>
<p> Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.</p>
<div className="sub-content">
<a href=''>Safelock</a>
</div>
</div>
</div>

<div className="aside-savingways">
<div className="aside-savingways-image">
<img src={Target} alt="image/goal" className='aside-logo' />
</div>
<div className="aside-savingways-text">
<h5>Goal-oriented Savings</h5>
<p> Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
<div className="sub-content">
<a href=''>Target Savings</a>
</div>
</div>
</div>

<div className="aside-savingways">
<div className="aside-savingways-image">
<img src={FlexNaira} alt="image/flexible" className='aside-logo' />
</div>
<div className="aside-savingways-text">
<h5>Flexible Savings</h5>
<p> Save, transfer, withdraw, manage and organise your money for free at any time.</p>
<div className="sub-content">
<a href=''>Flex Naira</a>
</div>
</div>
</div>

</div>

</div>
 </>
  )
}

export default SavingWays