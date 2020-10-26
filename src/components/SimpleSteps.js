import React, { Component } from 'react';

class SimpleSteps extends Component {
    render() {
        return (
            <div class='simple-steps'>
                <p>Wystarczą 4 proste kroki</p>
                <div class='decoration'></div>
                <div class='background'>
                    <div class='article'>
                        <div class='icon1'></div>
                        <p>Wybierz rzeczy</p>
                        <p>ubrania zabawki sprzęt inne</p>
                    </div>

                    <div class='article'>
                    <div class='icon2'></div>
                    <p>Spakuj je</p>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div class='article'>

                    <div class='icon3'></div>
                    <p>Zdecyduj komu chcesz pomóc</p>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div class='article'>
                        
                    <div class='icon4'></div>
                    <p>Zamów kuriera</p>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>

                </div>
                <div class='rectangle'>ODDAJ RZECZY</div>
                        
                
            </div>
        );
    }
}

export default SimpleSteps;
