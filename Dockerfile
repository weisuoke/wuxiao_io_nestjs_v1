# 使用一个支持更长时间支持的LTS版本，如node:18.12.1-alpine3.15
FROM node:18.12.1-alpine3.15

# 使用非root用户运行应用，增加安全性
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# 设置工作目录
WORKDIR /app

# 复制 package*.json 和 pnpm-lock.yaml (如果有)
COPY package*.json pnpm-lock.yaml* ./

# 安装pnpm
RUN npm install -g pnpm

# 安装依赖项
RUN pnpm install --frozen-lockfile

# 更改工作目录的所有权
RUN chown -R appuser:appgroup /app

# 切换到创建的非root用户
USER appuser

# 复制剩余的应用文件
COPY --chown=appuser:appgroup . .

# 暴露端口
EXPOSE 3000

# 运行应用
CMD ["pnpm", "run", "start:dev"]