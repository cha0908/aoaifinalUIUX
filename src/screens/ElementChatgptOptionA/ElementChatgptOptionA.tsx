import React from "react";
import { DivWrapper } from "../../components/DivWrapper";
import { IconIonicons } from "../../components/IconIonicons";
import { IconIoniconsSharp } from "../../components/IconIoniconsSharp";
import { IconIoniconsWrapper } from "../../components/IconIoniconsWrapper";
import { ImgWrapper } from "../../components/ImgWrapper";
import "./style.css";

export const ElementChatgptOptionA = (): JSX.Element => {
  return (
    <div className="element-chatgpt-option-a">
      <div className="div-2">
        <div className="frame">
          <div className="p-default">
            <IconIonicons
              className="icon-ionicons-outline-exit-outline"
              union="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/union-2.svg"
              unionClassName="icon-ionicons-instance"
            />
            <div className="text-wrapper">Share</div>
          </div>
        </div>
        <div className="frame-2">
          <div className="frame-wrapper">
            <div className="frame-3">
              <img
                className="image"
                alt="Image"
                src="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/image-1@2x.png"
              />
              <p className="p">Unleash AI for your Business</p>
            </div>
          </div>
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-5">
                <div className="frame-6">
                  <div className="text-wrapper-2">Lenovo PCCW Solutions GPT</div>
                </div>
                <div className="frame-7">
                  <div className="text-wrapper-3">Tender Summary</div>
                </div>
              </div>
              <div className="frame-7">
                <div className="text-wrapper-3">FAQ</div>
              </div>
              <div className="frame-7">
                <div className="text-wrapper-4">Feedback</div>
              </div>
              <div className="frame-7">
                <div className="text-wrapper-3">About &amp; Privacy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-8">
          <div className="frame-9">
            <div className="frame-10">
              <div className="frame-11">
                <div className="frame-12">
                  <IconIoniconsWrapper
                    img="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/subtract.svg"
                    subtract="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/subtract-1.svg"
                    union="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/union-1@2x.png"
                    unionClassName="icon-ionicons-outline-chat2"
                    vector="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/vector-2.svg"
                  />
                  <div className="frame-13">
                    <div className="frame-14">
                      <div className="text-wrapper-5">LPS ChatGPT</div>
                      <div className="text-wrapper-6">Operated by Lenovo PCCW</div>
                    </div>
                    <div className="text-wrapper-7">Model: v2.0-270723</div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="welcome-to-lenovo">
              Welcome to Lenovo PCCW Solutions GPT chatroom
              <br />
              Let&#39;s chat! Feel free to ask anything.
            </h1>
          </div>
          <div className="frame-15">
            <p className="text-wrapper-8">What do you want to know?</p>
            <div className="frame-16">
              <div className="p-wrapper">
                <p className="text-wrapper-9">
                  How could the AI-powered tender summary service help my business? How could I make use of the AI
                  generated report?
                </p>
              </div>
              <div className="p-wrapper">
                <p className="text-wrapper-9">
                  What is PCCW management approach to help your businesses stay ahead of the curve and innovate in
                  industries?
                </p>
              </div>
              <div className="p-wrapper">
                <p className="text-wrapper-9">
                  What are the advantages of using AI in your business? How AI solutions can help predict future trends
                  based on historical data?
                </p>
              </div>
            </div>
          </div>
          <div className="frame-17">
            <div className="icon-ionicons-outline-clean-2-wrapper">
              <DivWrapper
                divClassName="icon-ionicons-outline-clean-2"
                ellipseClassName="icon-ionicons-outline-clean-2"
                ellipseClassNameOverride="icon-ionicons-outline-clean-2"
                img="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/vector-7.svg"
                union="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/union.svg"
                vector="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/vector-6.svg"
                vector1="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/vector-8.svg"
              />
            </div>
            <div className="frame-18">
              <p className="text-wrapper-10">Feel free to ask anything</p>
              <div className="frame-19">
                <ImgWrapper
                  className="design-component-instance-node"
                  iconIonicons="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/icon---ionicons---outline---mic-circle-outline.svg"
                />
                <IconIoniconsSharp
                  className="design-component-instance-node"
                  iconIoniconsSharp="https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/icon---ionicons---sharp---arrow-forward-circle-sharp-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
