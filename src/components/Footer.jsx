import React from 'react'

const FooterComponent = () => {
    return (
        <footer>
            <div class="footer">
                <div class="contain row w-[85%] mx-auto">
                    <div class="col col-md-4">
                        <h2>Contact</h2>
                        <ul>
                            <li>+91-9312631334</li>
                            <li>kakainet124@gmail.com</li>
                        </ul>
                    </div>
                    <div class="col address col-md-4">
                        <h2>Address </h2>
                        <ul>
                            <li>2,5D/119, Railway Road, New Industrial Township-5, Faridabad, India - 121001</li>
                        </ul>
                    </div>
                    <div class="col col-md-4">
                        <div className="image">
                            <img src="logo1.png" alt="" />
                        </div>
                        <div class="icon">
                            
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <p id="copyrite" className='text-center text-sm'>@ copywrite 2023 All right reserved | pvt ltd.</p>
            </div>
        </footer>
    )
}

export default FooterComponent
