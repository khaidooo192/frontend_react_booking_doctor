import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {   
    render() {
       
        return (
           <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về HealBK
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                    <iframe width="100%" height="400px" 
                    src="https://www.youtube.com/embed/FyDQljKtWnI" 
                    title="DEMO - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> 
                    </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                        Trang web đặt lịch khám bệnh demo là một nền tảng trực tuyến giúp bệnh nhân dễ dàng chọn 
                        và đặt lịch hẹn với bác sĩ hoặc cơ sở y tế. Người dùng có thể tìm kiếm theo bác sĩ, chuyên khoa, 
                        hoặc địa điểm phù hợp với nhu cầu cá nhân. Giao diện thân thiện và trực quan, giúp người dùng xem 
                        chi tiết lịch làm việc, thông tin bác sĩ và các dịch vụ y tế cung cấp. Ngoài ra, hệ thống còn hỗ 
                        trợ xác nhận và nhắc nhở lịch hẹn qua email hoặc tin nhắn, giúp việc quản lý lịch khám trở nên 
                        thuận tiện và hiệu quả hơn.
                        </p>
                    </div>
                </div>
            </div>
                    
            
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
