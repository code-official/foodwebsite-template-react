import React from 'react'

function COntact() {
    return (
        <div id='contact'>
            <h4 className='text-center text-dark'>RESERVATION</h4>
            <h1>BOOK YOUR TABLE</h1>
            <form className='form'>
                {/* <input type='text' placeholder='fullName'/>
            <input type='text' placeholder='email'/>
            <textarea placeholder='wrijfjnfm' />
            <input  type='submit' value='BOOK' /> */}
                <div className='row g-3 align-items-center'>
                    <div className='col-auto'>
                        <input type='text' class="form-control" placeholder='NAME' />
                    </div>
                    <div className='col-auto'>
                        <input type='text' class="form-control" placeholder='EMAIL'/>
                    </div>
                    <div className='col-auto'>
                        <input type='text' class="form-control" placeholder='DATE' />
                    </div>
                    <div className='col-auto'>
                        <input type='text' class="form-control" placeholder='TIME'/>
                    </div>
                    <div className='col-auto'>
                        <input type='text' class="form-control" placeholder='PEOPME' />
                    </div>
                    <div className='col-auto '>
                        <input type='text' class="form-control text-primary bg-danger" placeholder='FIND A TABLE' />

                    </div>
                </div>
            </form>

        </div>
    )
}

export default COntact
