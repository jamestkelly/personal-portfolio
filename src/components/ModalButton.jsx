import React, { Component } from 'react';

class ModalButton extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    ButtonIcon = ({ icon }) => (
        <div>
            { icon }
        </div>
    )

    render() {
        return (
            <main>
                <button class="relative inline-block text-lg group" onClick={ this.showModal }>
                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out bg-theme rounded group-hover:text-black">
                        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-theme"></span>
                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                        <span class="relative font-bold">{ this.props.content }</span>
                    </span>
                    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>
            </main>
        )
    }
}

export default ModalButton;