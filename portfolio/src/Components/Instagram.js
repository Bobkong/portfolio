import instagramBanner from '../Assets/instagram-banner.png';
import handtracking from '../Assets/hand-tracking.gif';
import appearance from '../Assets/appearance.gif';
import manipulation from '../Assets/manipulation.gif';
import game from '../Assets/game.gif';
import './DesignDetail.css';
import './Instagram.css';
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import classNames from 'classnames';
import Iframe from 'react-iframe'
const navArr = ['Overview', 'Understand', 'Explore', '1st Round Critique', 'AR Prototyping', 'Visual Design', '2nd Round Critique', 'Final Design', 'Takeaway'];

class Instagram extends Component {

    constructor(props){
        super(props)
        this.state = {
          currentId:0
        }
      }

    scrollToAnchor = (anchorId) => {
        if (anchorId) { 
            let anchorElement = document.getElementById(anchorId);
            if(anchorElement) {
            anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
            }
        }
    }

    componentWillMount(){
        var _this = this;
         window.onscroll = function(){
          //get scroll position
          var top = document.documentElement.scrollTop;
          var sections = document.getElementsByClassName("section");
          //save section id
          var currentId;
          for (var i =0; i<sections.length; i++) {
            var itemTop = sections[i].offsetTop;
              if(top>itemTop-50){
                currentId = i;
              }else{
                break;
              }
          }
          _this.setState({
            currentId:currentId})
         }
      }
    
    render() {
    
        return (
            
        <div id="work-div">
            <img src={instagramBanner} className="work-banner" alt='Instagram banner'></img>
            <ul className="nav-con" id="menu">
                {navArr.map((item,index)=>{
                    return <li><a className={classNames('nav-item', [this.state.currentId===index&&"nav-item-active"])} onClick={this.scrollToAnchor.bind(this,'nav-'+index)}>{item}</a></li>
                })}
            </ul>
            <div className='work-content-div instagram-work-content'>
                <div className='section' id='nav-0'>
                    <div className='work-overview work-chapter-div'>
                        <div className='work-role'>
                            <h2 className='work-title-2 work-text-center'>Role</h2>
                            <p className='work-text-center work-overview-text'>Designer & Prototyper Intern</p>
                        </div>
    
                        <div className='work-timeline'>
                            <h2 className='work-title-2 work-text-center'>Timeline</h2>
                            <p className='work-text-center work-overview-text'>12 weeks (June 2022 - Sep 2022)</p>
                        </div>
    
                        <div className='work-tools'>
                            <h2 className='work-title-2 work-text-center'>Tools</h2>
                            <p className='work-text-center work-overview-text'>Figma, Spark AR, Origami, After Effects, Figjam, Google Suites</p>
                        </div>
                    </div>
    
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>Instagram AR Design</p>
                        <p className='work-text'>Instagram AR Design Team is a multidisciplinary team with the goal of <span className='work-text-bold'>empowering anyone to creatively experiment and express themselves.</span> To achieve this, we explore new opportunities for Instagram Reels by building differentiated creative tools and identifying strategic technology investments.</p>
                    </div>
    
                    <div className='work-chapter-div'>
                        <div className='instagram-left-right-div'>
                            <div className='instagram-half-div'>
                                <p className='work-title-1 work-text instagram-internship-project-title'>My Internship Project</p>
                                <p className='work-text'>To achieve our goal, we identify strategic technology investments. The development and shipment of new AR capabilities (eg., <span className='work-text-bold'>hand tracking</span>) is a crucial part of our mission.</p>
                                <p className='work-text'>The goal of my internship project is to <span className='work-text-bold'>ideate, design, and prototype 1-2 AR experiences</span> that align with our foundational strategy on Creative Lab utilizing the new hand-tracking capability.</p>
                            </div>
                            <img src={handtracking} className='hand-tracking-img instagram-half-div' alt='hand tracking'></img>
                        </div>
                    </div>
    
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>Design Process</p>
                        <div className='instagram-design-process-div'>
                            <div className='instagram-single-process-div margin-top-two-rem'>
                                <p className='work-title-2 work-text'>1. Understand</p>
                                <hr className='instagram-process-underline' />
                                <p className='work-text instagram-proces-text'>Competitive Analysis</p>
                                <p className='work-text instagram-proces-text'>Instagram Third Party Research</p>
                                <p className='work-text instagram-proces-text'>Instagram First Party Research</p>
                            </div>
    
                            <div className='instagram-single-process-div margin-top-two-rem'>
                                <p className='work-title-2 work-text'>2. Explore</p>
                                <hr className='instagram-process-underline' />
                                <p className='work-text instagram-proces-text'>Initial Concepts</p>
                                <p className='work-text instagram-proces-text'>Figma Sketches</p>
                            </div>
    
                            <div className='instagram-single-process-div margin-top-two-rem'>
                                <p className='work-title-2 work-text'>3. Evaluate</p>
                                <hr className='instagram-process-underline' />
                                <p className='work-text instagram-proces-text'>Feedback from Managers</p>
                                <p className='work-text instagram-proces-text'>1st Round Design Critique</p>
                                <p className='work-text instagram-proces-text'>Core Idea</p>
                            </div>
    
                            <div className='instagram-single-process-div margin-top-two-rem'>
                                <p className='work-title-2 work-text'>4. Prototyping</p>
                                <hr className='instagram-process-underline' />
                                <p className='work-text instagram-proces-text'>User Flow Prototyping</p>
                                <p className='work-text instagram-proces-text'>Visual Design</p>
                                <p className='work-text instagram-proces-text'>2nd Round Design Critique</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section' id='nav-1'>

                    <div className='instagram-divider-wrapper'>
                        <img src={require('../Assets/instagram-divider.png')} alt="divider" className='instagram-divider'></img>
                    </div>
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>Competitive Analysis</p>
                        <p className='work-text'>First of all, I learned the landscape of effects and designs that utilize hand-tracking by conducting competitive analysis. I researched our main competitors: <span className='work-text-bold'>TikTok</span> and <span className='work-text-bold'>Snapchat</span>.</p>
                        <p className='work-title-2 work-text margin-top-four-rem'>Competitor Insights</p>
                        <p className='work-text margin-top-one-rem'>By reviewing a lot of hand-tracking effects of competitors, I divided them into 3 types. </p>
                        <div className='instagram-3-horizontal-div'>
    
                            <div className='instagram-competitive-single-insight'>
                                <img src={appearance} alt="appearance" className='instagram-competitive-gif'/>
                                <p className='work-text-center work-text-bold'>Appearance</p>
                                <p className='work-text-center'>Decorating hands by utilizing hand-tracking technology</p>
                            </div>
    
                            <div className='instagram-competitive-single-insight'>
                                <img src={manipulation} alt="manipulation" className='instagram-competitive-gif'/>
                                <p className='work-text-center work-text-bold'>Manipulation</p>
                                <p className='work-text-center'>Manipulating objects using hands</p>
                            </div>
    
                            <div className='instagram-competitive-single-insight'>
                                <img src={game} alt="game" className='instagram-competitive-gif'/>
                                <p className='work-text-center work-text-bold'>Game</p>
                                <p className='work-text-center'>Playing games with hands and getting fun from the effects</p>
                            </div>
                            
                        </div>
                    </div>
    
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>Instagram Third Party Research</p>
                        <div className='instagram-left-right-div instagram-third-party-research'>
                            <div className='instagram-half-div'>
                                <p className='work-text'>
                                    I also researched the Instagram effects designed by third-party creators. I found most of them are about appearance and manipulation. <span className='work-text-bold'>Only a few game effects</span>.
                                </p>
                                <p className='work-text'>
                                    Based on the learning from competitive analysis, game effects with hand-tracking capability are very popular in TikTok and Snapchat, so I concluded the first brainstorming direction: 
                                </p>
                                <div className='instagram-full-div grey-background conclusion-div margin-top-one-rem'>
                                    <p className='work-title-3'>Direction 1: Combine hand-tracking capability with games</p>
                                </div>
                            </div>
                            <div className='instagram-half-div'>
                                <img src={require('../Assets/third-party-1.png')} className='full-width-image' alt='Instagram third party research'></img>
                                <img src={require('../Assets/third-party-2.png')} className='full-width-image'alt='Instagram third party research'></img>
                            </div>
                        </div>
                    </div>
    
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>Instagram First Party Research</p>
    
                        <div className='instagram-left-right-div instagram-third-party-research'>
                            <div className='instagram-half-div'>
                                <p className='work-text'>
                                    Besides learning the effects and designs from competitors and third-party creators, learning the focus areas and the roadmap of my team is also very important. 
                                </p>
                                <p className='work-text'>
                                    My team is doing a great job with creative tools, such as <span className='work-text-bold'>text, editing, and audio</span>. I think combining these useful tools with hand-tracking might be another brainstorming direction:
                                </p>

                                <div className='instagram-full-div grey-background conclusion-div margin-top-one-rem'>
                                    <p className='work-title-3'>Direction 2: Combine hand-tracking capability with the focus area of my team</p>
                                </div>

                            </div>
                            <div className='instagram-half-div'>
                                <img src={require('../Assets/instagram-first-party.png')} className='full-width-image one-one-image' alt='Instagram first party research'></img>
                            </div>
                        </div>
    
                    </div>
                </div>

                <div className='section' id='nav-2'>
                    <div className='instagram-divider-wrapper'>
                        <img src={require('../Assets/instagram-divider.png')} alt="divider" className='instagram-divider'></img>
                    </div>
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>Initial Concepts</p>
                        <p className='work-text'>
                            Based on the learnings from the understanding phase, I started to develop a range of concepts that explore new use cases to utilize and showcase hand-tracking capabilities. 
                        </p>
                        <p className='work-text'>
                            As I mentioned before, game is one direction, and combining hand-tracking capability with the focus areas of my team is another direction. Finally, I got 10 initial ideas which can be grouped into 4 categories, which are <span className='work-text-bold'>game, text, editing, and audio</span>.
                        </p>
                        <img src={require('../Assets/initial-concepts.png')} className='full-width-image margin-top-two-rem' alt='initial concepts'></img>
                    </div>
    
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>Figma Sketches</p>
                        <p className='work-text'>
                            To better communicate with other team members and help them understand my ideas, I quickly sketched all ideas in Figma. Check <a target='_blank' href='https://www.figma.com/file/6tFMPjDEv37XzwCMGB4OJv/Design-Concept?node-id=37%3A1111'>All Sketches</a>.
                        </p>
                        
                        <img src={require('../Assets/figma-sketches.png')} className='full-width-image margin-top-two-rem' alt='figma skteches'></img>
                    </div>
                </div>
    
                <div className='section' id='nav-3'>
                    <div className='instagram-divider-wrapper'>
                        <img src={require('../Assets/instagram-divider.png')} alt="divider" className='instagram-divider'></img>
                    </div>
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>Feedback from Manangers</p>
                        <p className='work-text'>
                            After generating initial ideas, I first talked with my intern manager and the team manager. We evaluated all ideas together following the <span className='work-text-bold'>Instagram Brainstorming Guideline</span>, which defines a good first-party idea should be:
                        </p>
    
                        <div className='evaluate-guideline-div margin-top-two-rem'>
                            <div className='evaluate-single-guideline-div'>
                                <p className='work-title-3 work-text'>Non-opinionated</p>
                                <hr className='instagram-process-underline' />
                            </div>
    
                            <div className='evaluate-single-guideline-div'>
                                <p className='work-title-3 work-text'>Evergreen</p>
                                <hr className='instagram-process-underline' />
                            </div>
    
                            <div className='evaluate-single-guideline-div'>
                                <p className='work-title-3 work-text'>Unique</p>
                                <hr className='instagram-process-underline' />
                            </div>
    
                            <div className='evaluate-single-guideline-div'>
                                <p className='work-title-3 work-text'>Feasible</p>
                                <hr className='instagram-process-underline' />
                            </div>
                        </div>
                    
    
                        <p className='work-text margin-top-two-rem'>
                            Based on the guideline and their feedback, I ruled out some ideas. For example, in the idea - "which singer", I will show some singers to users and they can use hand gestures to select their favorite one. But users may not like music or not like the singers we show, so this is too opinionated and I ruled it out. 
                        </p>
    
    
                        <p className='work-text'>
                            In the end, I narrowed down 10 initial ideas to <span className='work-text-bold'>6 ideas</span>.
                        </p>
                        
                        <img src={require('../Assets/concepts-after-manager.png')} className='full-width-image margin-top-one-rem' alt='feedback from managers'></img>
                    </div>
                
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>1st Round Design Critique</p>
                        <p className='work-text'>
                            Due to the limited time, I can’t prototype all 6 ideas, so I also presented these ideas in the team design critique and learn the preferences of team members. View <a target='_blank' href='https://www.figma.com/file/xokh22j4v8Og8FVa1msKrY/Concept-Feedback-Collection----Lingshuang?node-id=0%3A1'>Design Critique Doc</a>.
                        </p>
    
                        <img src={require('../Assets/1st-critique.png')} className='full-width-image margin-top-two-rem' alt='1st round critique feedback'></img>
    
                        <p className='work-text margin-top-one-rem'>
                            Finally, I got the two most popular ideas. In this case study, I will show the subsequent design process of one core idea - <span className='work-text-bold'>Floating Letters</span>.
                        </p>
                    </div>
    
                    <div className='work-chapter-div'>
    
                        <div className='instagram-left-right-div'>
                            <div className='instagram-half-div'>
                                <p className='work-title-1 work-text'>Floating Letters</p>
                                <p className='work-text'>
                                    Now! Let’s learn the core idea Floating Letters, which is a cool and interesting tool that utilizes <span className='work-text-bold'>AR text</span> to enable users to express themselves, and <span className='work-text-bold'>hand gestures</span> to collect letters and create a sense of superpower! 
                                </p>
                                <p className='work-text'>
                                    The GIF is the Figma sketch demo.
                                </p>
                            </div>
    
                            <img src={require('../Assets/floating-letters-sketch.gif')} className='full-width-image instagram-half-div' alt='floating letters Figma sketch'></img>
                        </div>
                        
                    </div>
    
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>Open Hand or Index Finger?</p>
                        <p className='work-text'>
                            I also collected much insightful feedback in the design critique. The most discussed feedback is <span className='work-text-bold'>why using the open hand as the collection gesture</span>. Is the narrative of open hand reasonable and versatile enough?
                        </p>
    
                        <p className='work-text'>
                        To answer this question, I compared the open hand with another recognizable gesture - <span className='work-text-bold'>index finger</span>.
                        </p>
    
                        <div className='instagram-left-right-div'>
                            <div className='instagram-half-div'>
                                <p className='work-title-2 work-text'>Use Case 1: Self Expression</p>
                                <p className='work-text'>
                                    For story telling and self-expression, these two gestures are <span className='work-text-bold'>both reasonable and easy to understand</span>.
                                </p>
                                <p className='work-text'>
                                    For example, if I wanna say "I am very happy", I can use the open hand or index finger.
                                </p>
                            </div>
                            <div className='instagram-half-div'>
                                <img src={require('../Assets/expression-open.png')} className='half-width-image margin-right-tow-percent' alt='self expression open hand'/>
                                <img src={require('../Assets/expression-index.png')} className='half-width-image' alt='self expression index finger'/>
                            </div>
                        </div>
    
                        <div className='instagram-left-right-div margin-top-two-rem'>
                            <div className='instagram-half-div'>
                                <p className='work-title-2 work-text'>Use Case 2: Introduction</p>
                                <p className='work-text'>
                                    For the introduction, <span className='work-text-bold'>the narrative of the index finger is more reasonable</span>. We normally use the index finger rather than the open hand to introduce a person or an item,
                                </p>
                            </div>
                            <div className='instagram-half-div'>
                                <img src={require('../Assets/introduction-index.png')} className='half-width-image margin-right-tow-percent' alt='introduction index finger'/>
                                <img src={require('../Assets/introduction-open.png')} className='half-width-image' alt='introduction open hand'/>
                            </div>
                        </div>
    
                        <p className='work-text margin-top-two-rem'>
                            Since the index finger can support more use cases than the open hand, I finally <span className='work-text-bold'>chose the index finger as the collection gesture</span>.
                        </p>
    
                    </div>
                </div>
                
                <div className='section' id='nav-4'>
                    <div className='instagram-divider-wrapper'>
                        <img src={require('../Assets/instagram-divider.png')} alt="divider" className='instagram-divider'></img>
                    </div>
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>AR Prototyping</p>
    
                        <p className='work-title-2 work-text margin-top-four-rem'>Prototyping Tool</p>
                        <p className='work-text margin-top-one-rem'>
                            Next, I started to prototype the design. I need to prototype text input, letter random animation, and hand tracking, so <span className='work-text-bold'>Figma is not the right prototyping tool</span> since it doesn't support these features. 
                        </p>
                        <img src={require('../Assets/spark-ar.png')} className='full-width-image margin-top-one-rem' alt='spark ar'></img>
                        <p className='work-text margin-top-one-rem'>
                            Here, I utilized <span className='work-text-bold'>Spark AR</span> to prototype my design. Spark AR is a prototyping tool for XR developers, 2D artists, and 3D modelers. All AR effects on Instagram have to be prototyped in Spark AR,
                        </p>
    
                        <div className='instagram-left-right-div margin-top-four-rem'>
                            <div className='instagram-half-div'>
                                <p className='work-title-2 work-text'>User Flow Prototyping</p>
                                <p className='work-text'>
                                    I prototyped the user flow of Floating Letters in Spark AR. In this stage, I mainly implemented the text input, letter random animation, hand tracking, and letter collection with Javascript development. 
                                </p>
                                <p className='work-text'>
                                    The GIF is the prototype made in Spark.
                                </p>
                            </div>
                            <div className='instagram-half-div'>
                                <img src={require('../Assets/user-flow-prototyping.gif')} className='full-width-image' alt='spark ar'></img>
                            </div>
                        </div>
                        
    
                        
                    </div>
    
    
                    
                </div>

                <div className='section' id='nav-5'>
                    <div className='instagram-divider-wrapper'>
                        <img src={require('../Assets/instagram-divider.png')} alt="divider" className='instagram-divider'></img>
                    </div>
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>Visual Design</p>
                        <p className='work-text'>
                            After implementing the main user flow, I started to make my design more visually appealing. 
                        </p>
                        <p className='work-title-2 work-text margin-top-four-rem'>Color</p>
                        <p className='work-text'>
                            I want to enable users to change the color of letters,  but the default color is still very important since according to our research, <span className='work-text-bold'>more than 90% of users won’t change the default settings</span> of effects.
                        </p>
                        <p className='work-text'>
                            To define the default color, I created a mood board based on these 4 keywords which are the best description for Floating Letters:
                        </p>
                    
                        <div className='evaluate-guideline-div margin-top-two-rem'>
                            <div className='evaluate-single-guideline-div'>
                                <p className='work-title-3 work-text'>Modern</p>
                                <hr className='instagram-process-underline' />
                            </div>
    
                            <div className='evaluate-single-guideline-div'>
                                <p className='work-title-3 work-text'>Youthful</p>
                                <hr className='instagram-process-underline' />
                            </div>
    
                            <div className='evaluate-single-guideline-div'>
                                <p className='work-title-3 work-text'>Fun</p>
                                <hr className='instagram-process-underline' />
                            </div>
    
                            <div className='evaluate-single-guideline-div'>
                                <p className='work-title-3 work-text'>Cool</p>
                                <hr className='instagram-process-underline' />
                            </div>
                        </div>
    
                        <p className='work-text margin-top-one-rem'>
                            I took much inspiration from the existing products and designs on Dribbble, Behance, and Pinterest and created the mood board:
                        </p>
    
                        <img src={require('../Assets/moodboard.png')} className='full-width-image' alt='mood board'></img>
                        <p className='work-text margin-top-two-rem'>
                            Based on the mood board, I decided to use <span className='work-text-bold'>#7638FA</span> as the default color, which also comes from the gradient of Instagram and aligns with the IG brand.
                        </p>
                        <img src={require('../Assets/instagram-gradient.gif')} className='full-width-image' alt='instagram gradient'></img>
    
                        <div className='instagram-left-right-div margin-top-two-rem'>
                            <div className='instagram-half-div'>
                                <p className='work-title-2 work-text'>Font</p>
                                <p className='work-text'>
                                    For the letter font, I viewed <span className='work-text-bold'>all fonts of the Instagram story</span>, then integrated them into my prototype and enabled users to change fonts. These fonts also align with the Instagram design.
                                </p>
                            </div>
                            <div className='instagram-half-div'>
                                <img src={require('../Assets/typefaces.jpg')} className='full-width-image' alt='Instagram fonts'></img>
                            </div>
                        </div>
    
                        <div className='instagram-left-right-div margin-top-two-rem'>
                            <div className='instagram-half-div'>
                            <p className='work-title-2 work-text margin-top-four-rem'>3D-Like</p>
                            <p className='work-text'>
                                I also borrowed from an Instagram first-party effect - Dynamic Lyrics and learned how it makes the text 3D-like, which <span className='work-text-bold'>gives text a shadow</span> and can make the letters more like real objects.
                            </p>
                            </div>
                            <div className='instagram-half-div'>
                                <img src={require('../Assets/floating-3d.png')} className='full-width-image' alt='Floating Letters 3D'></img>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                </div>

                <div className='section' id='nav-6'>
                    <div className='instagram-divider-wrapper'>
                        <img src={require('../Assets/instagram-divider.png')} alt="divider" className='instagram-divider'></img>
                    </div>
                    <div className='work-chapter-div'>
                        <p className='work-title-1 work-text'>2nd Round Design Critique</p>
                        <p className='work-text'>
                            After the visual design, I conducted the 2nd round of design critique. In this design critique, I asked team members to <span className='work-text-bold'>experience the working prototype on their own phones</span> to collect bugs and feedback.
                        </p>
                        <img src={require('../Assets/2nd-feedback.png')} className='full-width-image' alt='2nd round design critique'></img>
                        <p className='work-text margin-top-one-rem'>
                            I fixed all bugs existing in the prototype. Due to the limited time, I discussed all feedback with my manager and prioritized the feedback, then solved the high-priority feedback.
                        </p>
                        <p className='work-title-2 work-text margin-top-four-rem'>How to Adjust Font Size?</p>
                        <p className='work-text'>
                            Next, I will use an example to show my thinking process when I iterated my design based on the feedback.
                        </p>
    
                        <div className='instagram-left-right-div margin-top-two-rem'>
                            <div className='instagram-half-div'>
                            <p className='work-title-2'>
                                The Problem
                            </p>
                            <p className='work-text'>
                                Only one sidebar and one bottom picker can be displayed at one time. Here, I supported color adjustment using a side color bar, and font adjustment using a bottom picker list. But <span className='work-text-bold'>font size adjustment is not supported</span>. 
                            </p>
                            </div>
                            <div className='instagram-half-div'>
                                <img src={require('../Assets/font-size-problem.png')} className='full-width-image' alt='font size problem'></img>
                            </div>
                        </div>
    
                        <p className='work-text'>
                            To address this problem, I brainstormed 3 possible solutions by reviewing some other Instagram designs for AR text.
                        </p>
    
                        <div className='instagram-3-horizontal-div'>
    
                            <div className='instagram-competitive-single-insight'>
                                <img src={require('../Assets/zoom-in-out.gif')} alt="Two layer picker" className='instagram-image'/>
                                <p className='work-text-center work-text-bold'>Two-Layer Picker</p>
                                <p className='work-text-center'>When users select a first-layer picker, then a sidebar or bottom picker of the corresponding attribute will show up.</p>
                            </div>
    
                            <div className='instagram-competitive-single-insight'>
                                <img src={require('../Assets/two-layer-picker.gif')} alt="Pinch to zoom in and out" className='instagram-image'/>
                                <p className='work-text-center work-text-bold'>Pinch to Zoom in/out</p>
                                <p className='work-text-center'>When users pinch the sentence object, the object will zoom.</p>
                            </div>
    
                            <div className='instagram-competitive-single-insight'>
                                <img src={require('../Assets/instagram-lyrics.gif')} alt="Instagram Lyrics" className='instagram-image'/>
                                <p className='work-text-center work-text-bold'>Auto Size</p>
                                <p className='work-text-center'>The font size is decided by letter count automatically. Fewer letters mean a bigger font. More letters mean a smaller font.</p>
                            </div>
                            
                        </div>
    
                        <p className='work-title-2 margin-top-four-rem'>
                            Design Decision
                        </p>
                        <p className='work-text'>
                            Firstly, by researching the Two-layer picker and Pinch to Zoom in/out solutions, I found each of them <span className='work-text-bold'>has a serious shortcoming:</span>
                        </p>
    
                        <div className='instagram-left-right-div-stretch margin-top-one-rem'>
                            <div className='instagram-half-div grey-background design-decision-div'>
                                <p className='work-title-2 padding-left-right-one-rem margin-top-two-rem'>
                                    Con of Two-layer Picker
                                </p>
                                <p className='work-text padding-left-right-one-rem'>
                                    This solution will take more users’ time. If users want to change the font, they need to click the 1st layer picker and select a font in the second layer. If they want to adjust other attributes, they need to go back to the 1st layer.
                                </p>
                                <p className='work-text padding-left-right-one-rem margin-bottom-two-rem'>
                                    According to our statistics, <span className='work-text-bold'>effects with longer user flows are less popular</span> So I ruled out this solution.
                                </p>
                            </div>
    
                            <div className='instagram-half-div grey-background design-decision-div'>
                                <p className='work-title-2 padding-left-right-one-rem margin-top-two-rem'>
                                    Con of Pinch to Zoom in/out
                                </p>
                                <p className='work-text padding-left-right-one-rem'>
                                    On Instagram, users have to pinch an object to zoom it in or out. However, the sentence has<span className='work-text-bold'> exploded into many individual letter objects</span> and users can only pinch one letter at one time. 
                                </p>
                                <p className='work-text padding-left-right-one-rem margin-bottom-two-rem'>
                                    Hence, this is not a useful and effective way to solve this problem.
                                </p>
                            </div>
    
                        </div>
    
                        <p className='work-text margin-top-two-rem'>
                            I finally used the third solution - <span className='work-text-bold'>Auto Size</span>, because it can <span className='work-text-bold'>save time for users</span> and they don’t need to spend time adjusting font size. The font size will be adjusted to the optimum status automatically.
                        </p>
    
                        <div className='instagram-3-horizontal-div'>
    
                            <div className='instagram-competitive-single-insight'>
                                <img src={require('../Assets/auto-size-2.png')} alt="auto size 2" className='instagram-image'/>
                            </div>
    
                            <div className='instagram-competitive-single-insight'>
                                <img src={require('../Assets/auto-size-1.png')} alt="auto size 1" className='instagram-image'/>
                            </div>
    
                            <div className='instagram-competitive-single-insight'>
                                <img src={require('../Assets/auto-size-3.png')} alt="auto size 3" className='instagram-image'/>
                            </div>
                        </div>
    
    
                    </div>
    
                </div>

                <div className='section' id='nav-7'>
                    <div className='instagram-divider-wrapper'>
                        <img src={require('../Assets/instagram-divider.png')} alt="divider" className='instagram-divider'></img>
                    </div>
                    <div className='work-chapter-div'>
    
                        <p className='work-title-1'>
                            Final Design
                        </p>
                        <p className='work-text'>
                            Let’s watch the final design of Floating Letters!
                        </p>
                        
                        <div className="player-wrapper">
                            <ReactPlayer
                            url="https://youtube.com/shorts/QmYTVsiASnk"
                            className="react-player"
                            width="100%"
                            height="100%"
                            controls={true}
                            />
                        </div>
    
                        <p className='work-text margin-top-one-rem'>
                            Floating letters will be launched in December 2022, so users will be able to express themselves creatively with Floating Letters on Instagram very soon!
                        </p>
                    </div>
                </div>
    
                <div className='section' id='nav-8'>
                    <div className='instagram-divider-wrapper'>
                        <img src={require('../Assets/instagram-divider.png')} alt="divider" className='instagram-divider'></img>
                    </div>
                    <div className='work-chapter-div'>
    
                    <p className='work-title-1'>
                        Key Takeaways
                    </p>
    
                    <div className='instagram-3-horizontal-div'>
    
                        <div className='instagram-single-process-div '>
                                <p className='work-title-3 work-text'>Ask Questions</p>
                                <hr className='instagram-process-underline' />
                                </div>
    
                        <div className='instagram-single-process-div '>
                                <p className='work-title-3 work-text'>Choose the Right Tool</p>
                                <hr className='instagram-process-underline' />
                                
                        </div>
    
                        <div className='instagram-single-process-div '>
                                <p className='work-title-3 work-text'>Think Inclusively</p>
                                <hr className='instagram-process-underline' />
                        </div>
    
                        <div className='instagram-single-process-div '>
                            <p className='work-text'>
                                At Meta, I learned to ask questions. First, if encountering an obstacle, don't get stuck for a long time, and please ask! Second, before asking questions, clearly articulate the goals of the questions and give the context of the question!
                            </p>
                        </div>
    
                        <div className='instagram-single-process-div '>
                            <p className='work-text'>
                                I learned how to choose the right tools according to different design needs. For example, in brainsotrming phase, I utilized Figma to quickly sketch my ideas. In prototyping phase, I utilized Spark AR to prototype the AR interaction.
                            </p>
                        </div>
    
                        <div className='instagram-single-process-div '>
                            <p className='work-text'>
                                When I came up with the initial ideas, there are some opinionated and themed ideas, such as which singers, which can only attract a small number of users. But now I know how to evaluate ideas and make the design non-opinionated and evergreen.
                            </p>
                        </div>
    
                    </div>
    
                    </div>
    
                    <div className='work-chapter-div'>
    
                        <p className='work-title-1'>
                            Feedback about Me
                        </p>
    
                        <p className='work-text'>
                            I received a lot of positive feedback from the team. I'm so honored that everyone loves my work and my workflow. These pieces of feedback are the most precious memory of this unforgettable summer!
                        </p>
                        <p className='work-text-bold'>
                            (Drag to see more feedback!)
                        </p>

                        <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2tyC0lOABDAr9TwDruvTcI%2FFeedback-about-me!%3Fpage-id%3D0%253A1%26node-id%3D0%253A1%26viewport%3D479%252C395%252C0.36%26scaling%3Dmin-zoom"
                            width="700px"
                            height="700px"
                            className='feedback-iframe margin-top-two-rem'
                            display="block"
                            position="relative"/>
    
    
                    </div>
    
    
                </div>

    
            </div>
            
            

        </div>

            
       );
    }

}


export default Instagram;