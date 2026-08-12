import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { PropertyModule } from './property/property.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { ViewModule } from './view/view.module';
import { FollowModule } from './follow/follow.module';
import { BorardArticleModule } from './borard-article/borard-article.module';

@Module({
  imports: [
    MemberModule,  
    AuthModule, 
    PropertyModule, 
    BorardArticleModule,
    LikeModule,
    ViewModule,
    CommentModule,  
    FollowModule, 
    ]
})
export class ComponentsModule {}
