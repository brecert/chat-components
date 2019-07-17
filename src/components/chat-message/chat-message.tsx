import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-message',
  styleUrl: 'chat-message.scss',
  shadow: false
})
export class MyComponent {
  /**
   * The username of the user who created message
   */
  @Prop() username: string;

  /**
   * The sent message
   */
  @Prop() message: string;

  /**
   * The timestamp of when the message was created
   */
  @Prop() datetime: string;

  /**
   * The avatar url of the user who created the message
   */
  @Prop() avatar?: string


  render() {
    return(
      <div class="chat-message">
        { this.avatar === undefined
          ? <div key="avatarEmpty" />
          : <chat-avatar class="avatar" src={this.avatar} />
        }
        <div class="message-info">
          <div class="username">{this.username}</div>
          <div class="timestamp">{Date.parse(this.datetime) || ''}</div>
        </div>
        <div class="message">{this.message}<slot /></div>
      </div>
    )
  }
}
